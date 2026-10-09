import json
import sys
import urllib.request
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3210"

ROUTES = [
    "/",
    "/projects",
    "/projects/brownsville",
    "/projects/university-avenue",
    "/capabilities",
    "/record",
    "/about",
    "/careers",
    "/contact",
]

NAV = ["/projects", "/capabilities", "/record", "/about", "/careers", "/contact"]

fails = []


def check(label, ok, detail=""):
    print(("PASS  " if ok else "FAIL  ") + label + ((" :: " + str(detail)) if detail else ""))
    if not ok:
        fails.append(label)


def scroll_page(page):
    page.evaluate(
        """async () => {
        const step = Math.max(window.innerHeight, 400);
        for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 80));
        }
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 200));
        window.scrollTo(0, 0);
    }"""
    )
    page.wait_for_timeout(400)


with sync_playwright() as p:
    browser = p.chromium.launch()

    for width, name in [(390, "mobile"), (1024, "laptop"), (1440, "desktop")]:
        context = browser.new_context(viewport={"width": width, "height": 900})
        page = context.new_page()
        errors = []
        page.on(
            "console",
            lambda m: errors.append(m.type + ": " + m.text[:200]) if m.type == "error" else None,
        )
        page.on("pageerror", lambda e: errors.append("pageerror: " + str(e)[:200]))
        for path in ROUTES:
            errors.clear()
            page.goto(BASE + path, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(250)
            sw = page.evaluate("document.documentElement.scrollWidth")
            cw = page.evaluate("document.documentElement.clientWidth")
            check(
                f"{name} {width}px {path} zero horizontal overflow",
                sw <= cw,
                f"scrollWidth={sw} clientWidth={cw}",
            )
            if sw > cw:
                print(
                    "   offenders:",
                    page.evaluate(
                        """() => Array.from(document.querySelectorAll('*'))
                     .filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
                     .slice(0, 8)
                     .map(e => e.tagName + ' ' + (e.className || '').toString().slice(0, 80) + ' right=' + Math.round(e.getBoundingClientRect().right))"""
                    ),
                )
            check(f"{name} {path} zero console errors", not errors, errors)
        context.close()

    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    third = []
    page.on(
        "request",
        lambda req: third.append(req.url)
        if not req.url.startswith(BASE) and not req.url.startswith("data:")
        else None,
    )

    for path in ROUTES:
        page.goto(BASE + path, wait_until="networkidle", timeout=60000)
        scroll_page(page)
        html = page.content()
        title = page.title()
        check(f"{path} title names Loftus", "Loftus Construction" in title, title)
        desc = page.get_attribute('meta[name="description"]', "content") or ""
        check(f"{path} meta description", len(desc) > 60, desc[:90])
        check(f"{path} og:title", bool(page.get_attribute('meta[property="og:title"]', "content")))
        check(f"{path} og:image", bool(page.get_attribute('meta[property="og:image"]', "content")))
        robots = page.get_attribute('meta[name="robots"]', "content") or ""
        check(f"{path} noindex", "noindex" in robots, robots)
        body = page.inner_text("body")
        check(f"{path} names MJL Collective", "MJL Collective" in body)
        check(f"{path} not the official website", "not the official website" in body.lower())
        h1 = page.eval_on_selector_all("h1", "els=>els.map(e=>e.innerText)")
        check(f"{path} exactly one h1", len(h1) == 1, h1)
        tel = page.eval_on_selector_all('a[href^="tel:"]', "els=>els.map(e=>e.getAttribute('href'))")
        check(
            f"{path} tel links",
            bool(tel) and all(t == "tel:+18567866607" for t in tel),
            tel,
        )
        imgs = page.eval_on_selector_all(
            "img",
            "els=>els.map(e=>({a:e.getAttribute('alt'),n:e.naturalWidth,s:e.currentSrc||e.src}))",
        )
        check(
            f"{path} image alts",
            all((i["a"] or "").strip() for i in imgs),
            [i["s"][-60:] for i in imgs if not (i["a"] or "").strip()],
        )
        check(
            f"{path} images loaded",
            all(i["n"] > 0 for i in imgs),
            [i["s"][-60:] for i in imgs if i["n"] == 0],
        )
        forms = page.eval_on_selector_all(
            "form",
            "els=>els.map(e=>({action:e.getAttribute('action'), text:(e.innerText||'').slice(0,300)}))",
        )
        if path == "/contact":
            check(
                "contact demo RFQ does not submit",
                len(forms) == 1
                and not forms[0]["action"]
                and "demo form" in forms[0]["text"].lower()
                and "does not send" in forms[0]["text"].lower(),
                forms,
            )
        else:
            check(f"{path} has no form", len(forms) == 0, forms)
        ld = page.eval_on_selector_all(
            'script[type="application/ld+json"]', "els=>els.map(e=>e.textContent)"
        )
        check(f"{path} exactly one JSON-LD block", len(ld) == 1, len(ld))
        if path == "/":
            try:
                data = json.loads(ld[0])
                check(
                    "JSON-LD parses and has required fields",
                    data.get("@context") == "https://schema.org"
                    and data.get("name")
                    and data.get("address", {}).get("streetAddress"),
                    data.get("@type"),
                )
            except Exception as e:
                check("JSON-LD parses", False, e)

    check("no third-party requests on the route sweep", not third, third[:6])

    page.goto(BASE + "/", wait_until="networkidle", timeout=60000)
    hrefs = page.eval_on_selector_all(
        "header a[href]", "els=>els.map(e=>e.getAttribute('href'))"
    )
    page_hrefs = [h for h in hrefs if h != "#content"]
    check("nav has no in-page hash links", all("#" not in (h or "") for h in page_hrefs), page_hrefs)
    check("nav includes every page", all(item in hrefs for item in NAV), hrefs)
    current = page.eval_on_selector_all(
        "header [aria-current]", "els=>els.map(e=>e.innerText.trim())"
    )
    check("homepage marks no current nav item", len(current) == 0, current)
    logo = page.get_attribute("header img", "src") or ""
    check("header uses the reversed wordmark", "current-logo-white" in logo, logo[-80:])
    footer_logo = page.get_attribute("footer img", "src") or ""
    check(
        "footer uses the reversed dimensional mark",
        "dimensional-letters-white" in footer_logo,
        footer_logo[-80:],
    )

    page.goto(BASE + "/record", wait_until="networkidle", timeout=60000)
    record_current = page.eval_on_selector_all(
        "header a[aria-current='page']", "els=>els.map(e=>(e.innerText||'').trim())"
    )
    check(
        "record page marks Record",
        bool(record_current) and all(text.startswith("Record") for text in record_current),
        record_current,
    )

    page.goto(BASE + "/projects/brownsville", wait_until="networkidle", timeout=60000)
    project_current = page.eval_on_selector_all(
        "header a[aria-current='page']", "els=>els.map(e=>(e.innerText||'').trim())"
    )
    check(
        "project page marks Projects",
        bool(project_current) and all(text.startswith("Projects") for text in project_current),
        project_current,
    )

    context.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    page = mobile.new_page()
    page.goto(BASE + "/", wait_until="networkidle", timeout=60000)
    small = page.evaluate(
        """() => Array.from(document.querySelectorAll('header a, nav a, [data-primary]'))
             .filter(e => e.offsetParent !== null)
             .map(e => ({t:(e.innerText||'').trim().slice(0,28), h:Math.round(e.getBoundingClientRect().height)}))
             .filter(x => x.h < 44)"""
    )
    check("mobile nav and call targets at least 44px", not small, small)
    other = page.evaluate(
        """() => Array.from(document.querySelectorAll('main a, footer a'))
             .filter(e => e.offsetParent !== null && !e.hasAttribute('data-primary'))
             .map(e => ({t:(e.innerText||'').trim().slice(0,24), h:Math.round(e.getBoundingClientRect().height)}))
             .filter(x => x.t && x.h < 22)"""
    )
    check("mobile prose links at least 22px tall", not other, other)

    page.click("button[aria-controls='site-menu']")
    page.wait_for_timeout(200)
    expanded = page.get_attribute("button[aria-controls='site-menu']", "aria-expanded")
    check("menu aria-expanded is true when open", expanded == "true", expanded)
    focused = page.evaluate("!!document.activeElement && !!document.activeElement.closest('#site-menu')")
    check("menu moves focus into the menu", focused)
    box = page.locator("#site-menu a", has_text="Careers").bounding_box()
    width = page.evaluate("document.documentElement.clientWidth")
    inside = bool(box) and box["x"] >= -1 and box["x"] + box["width"] <= width + 1
    check(
        "Careers stays inside the 390px menu",
        inside,
        box,
    )
    sw = page.evaluate("document.documentElement.scrollWidth")
    check("open menu does not overflow 390px", sw <= width, f"scrollWidth={sw}")
    trapped = True
    for _ in range(14):
        page.keyboard.press("Tab")
        in_header = page.evaluate("!!document.activeElement && !!document.activeElement.closest('header')")
        if not in_header:
            trapped = False
            break
    check("tab stays inside the header while the menu is open", trapped)
    page.keyboard.press("Escape")
    page.wait_for_timeout(150)
    expanded = page.get_attribute("button[aria-controls='site-menu']", "aria-expanded")
    check("escape closes the menu", expanded == "false", expanded)
    focused_button = page.evaluate(
        "document.activeElement === document.querySelector(\"button[aria-controls='site-menu']\")"
    )
    check("escape returns focus to the menu button", focused_button)

    page.click("button[aria-controls='site-menu']")
    page.locator("#site-menu a", has_text="Careers").click()
    page.wait_for_url("**/careers", timeout=15000)
    check("menu Careers link opens /careers", page.url.rstrip("/").endswith("/careers"), page.url)
    mobile.close()

    context = browser.new_context()
    page = context.new_page()
    page.goto(BASE + "/", wait_until="networkidle", timeout=60000)
    links = page.eval_on_selector_all(
        "a[href]",
        """els => Array.from(new Set(els.map(e => e.getAttribute('href')).filter(Boolean)))""",
    )
    same = []
    for href in links:
        if href.startswith("/"):
            path = href.split("#")[0].split("?")[0]
            if path and path not in same:
                same.append(path)
    for path in same:
        try:
            status = urllib.request.urlopen(BASE + path, timeout=20).status
        except Exception as e:
            status = str(e)
        check(f"link {path} returns 200", status == 200, status)
    context.close()
    browser.close()

for path, expect in [("/robots.txt", "Disallow: /"), ("/sitemap.xml", "<urlset")]:
    try:
        body = urllib.request.urlopen(BASE + path, timeout=20).read().decode()
        check(f"{path} served and correct", expect in body, body[:120].replace("\n", " "))
        if path == "/sitemap.xml":
            import re
            from urllib.parse import urlparse

            locs = [urlparse(url).path or "/" for url in re.findall(r"<loc>(.*?)</loc>", body)]
            for route in ROUTES:
                check(f"sitemap contains {route}", route in locs, locs)
    except Exception as e:
        check(f"{path} served", False, e)

print()
print("RESULT:", "ALL CHECKS PASSED" if not fails else f"{len(fails)} FAILED: {fails}")
sys.exit(1 if fails else 0)
