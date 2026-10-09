import json
import sys
import urllib.request
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3210"
SHOT = sys.argv[2] if len(sys.argv) > 2 else "local"

fails = []


def check(label, ok, detail=""):
    print(("PASS  " if ok else "FAIL  ") + label + ((" :: " + str(detail)) if detail else ""))
    if not ok:
        fails.append(label)


with sync_playwright() as p:
    b = p.chromium.launch()
    for w, name in [(390, "mobile"), (1440, "desktop")]:
        ctx = b.new_context(viewport={"width": w, "height": 900})
        pg = ctx.new_page()
        errs = []
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text[:200]) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errs.append("pageerror: " + str(e)[:200]))
        pg.goto(BASE, wait_until="networkidle", timeout=60000)
        pg.wait_for_timeout(1200)

        sw = pg.evaluate("document.documentElement.scrollWidth")
        cw = pg.evaluate("document.documentElement.clientWidth")
        check(f"{name} {w}px zero horizontal overflow", sw <= cw, f"scrollWidth={sw} clientWidth={cw}")
        if sw > cw:
            print("   offenders:", pg.evaluate(
                """() => Array.from(document.querySelectorAll('*'))
                     .filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
                     .slice(0,10).map(e => e.tagName + '.' + (e.className||'') + ' right=' + Math.round(e.getBoundingClientRect().right))"""))
        check(f"{name} zero console errors", not errs, errs)

        if name == "mobile":
            small = pg.evaluate(
                """() => Array.from(document.querySelectorAll('header a, nav a, [data-primary]'))
                     .filter(e => e.offsetParent !== null)
                     .map(e => ({t:(e.innerText||'').trim().slice(0,28), h:Math.round(e.getBoundingClientRect().height)}))
                     .filter(x => x.h < 44)""")
            check("mobile nav and call targets at least 44px", not small, small)
            other = pg.evaluate(
                """() => Array.from(document.querySelectorAll('main a, footer a'))
                     .filter(e => e.offsetParent !== null && !e.hasAttribute('data-primary'))
                     .map(e => ({t:(e.innerText||'').trim().slice(0,24), h:Math.round(e.getBoundingClientRect().height)}))
                     .filter(x => x.t && x.h < 22)""")
            check("mobile prose links at least 22px tall", not other, other)

        pg.screenshot(path=f"/home/claude/loftus-construction/qa_{SHOT}_{name}.png", full_page=True)
        ctx.close()

    ctx = b.new_context(viewport={"width": 1280, "height": 900})
    pg = ctx.new_page()
    pg.goto(BASE, wait_until="networkidle", timeout=60000)
    # scroll the whole page so lazy images resolve before they are inspected
    pg.evaluate("""async () => {
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
    }""")
    pg.wait_for_timeout(1500)
    html = pg.content()

    check("title present", "<title>" in html and "Loftus Construction" in pg.title(), pg.title())
    desc = pg.get_attribute('meta[name="description"]', "content")
    check("meta description present", bool(desc and len(desc) > 60), (desc or "")[:90])
    check("og:title present", bool(pg.get_attribute('meta[property="og:title"]', "content")))
    check("og:image present", bool(pg.get_attribute('meta[property="og:image"]', "content")))
    rob = pg.get_attribute('meta[name="robots"]', "content")
    check("noindex present while demo", bool(rob and "noindex" in rob), rob)

    tel = pg.eval_on_selector_all('a[href^="tel:"]', "els=>els.map(e=>e.getAttribute('href'))")
    check("tel links all dial +18567866607", bool(tel) and all(t == "tel:+18567866607" for t in tel), tel)

    # The request-for-quote block is a labeled demo. It has no action and does not send.
    forms = pg.eval_on_selector_all(
        "form",
        "els=>els.map(e=>({action:e.getAttribute('action'), text:(e.innerText||'').slice(0,300)}))",
    )
    check(
        "demo RFQ is present and does not submit",
        len(forms) == 1
        and not forms[0]["action"]
        and "demo form" in forms[0]["text"].lower()
        and "does not send" in forms[0]["text"].lower(),
        forms,
    )

    banner = pg.inner_text("body")
    check("preview banner names the builder", "MJL Collective" in banner)
    check("banner states not the official site", "not the official website" in banner)

    ld = pg.eval_on_selector_all('script[type="application/ld+json"]', "els=>els.map(e=>e.textContent)")
    check("exactly one JSON-LD block", len(ld) == 1, len(ld))
    try:
        data = json.loads(ld[0])
        check("JSON-LD parses and has required fields",
              data.get("@context") == "https://schema.org" and data.get("name") and data.get("address", {}).get("streetAddress"),
              data.get("@type"))
    except Exception as e:
        check("JSON-LD parses", False, e)

    h1 = pg.eval_on_selector_all("h1", "els=>els.map(e=>e.innerText)")
    check("exactly one h1", len(h1) == 1, h1)

    imgs = pg.eval_on_selector_all("img", "els=>els.map(e=>({a:e.getAttribute('alt'),n:e.naturalWidth,s:e.currentSrc||e.src}))")
    check("every image has non-empty alt", all((i["a"] or "").strip() for i in imgs), [i["s"][-40:] for i in imgs if not (i["a"] or "").strip()])
    check("every image actually loaded", all(i["n"] > 0 for i in imgs), [i["s"][-40:] for i in imgs if i["n"] == 0])

    ctx.close()
    b.close()

for path, expect in [("/robots.txt", "Disallow: /"), ("/sitemap.xml", "<urlset")]:
    try:
        body = urllib.request.urlopen(BASE + path, timeout=20).read().decode()
        check(f"{path} served and correct", expect in body, body[:120].replace("\n", " "))
    except Exception as e:
        check(f"{path} served", False, e)

print()
print("RESULT:", "ALL CHECKS PASSED" if not fails else f"{len(fails)} FAILED: {fails}")
sys.exit(1 if fails else 0)
