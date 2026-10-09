"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import Divider from "./Divider";

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Record", href: "/#record" },
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

function ActiveMark({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-1 flex w-full flex-col gap-[3px] ${on ? "" : "invisible"}`}
    >
      <span className="block h-[2px] w-full bg-brand" />
      <span className="block h-px w-full bg-brand" />
      <span className="block h-px w-full bg-brand" />
    </span>
  );
}

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${Math.round(el.getBoundingClientRect().height)}px`,
      );
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    window.addEventListener("orientationchange", publish);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", publish);
    };
  }, [open]);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("top");
      if (hero && hero.getBoundingClientRect().bottom > window.innerHeight * 0.55) {
        setActive("");
        return;
      }
      const header = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
      );
      const mark = window.scrollY + (Number.isFinite(header) ? header : 100) + 32;
      let current = "";
      for (const item of nav) {
        const id = item.href.split("#")[1];
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= mark) current = `#${id}`;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const jump = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    const id = href.split("#")[1];
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", href);
    setActive(`#${id}`);
  };

  return (
    <header ref={ref} className="sticky top-0 z-50 bg-white text-navy">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3">
        <a
          href="/#top"
          onClick={jump("/#top")}
          className="flex min-h-11 min-w-0 flex-1 items-center lg:w-[280px] lg:flex-none"
        >
          <Image
            src="/images/logos/current-logo.png"
            alt={business.legalName}
            width={1200}
            height={285}
            loading="eager"
            sizes="(min-width: 1024px) 280px, 210px"
            className="h-auto w-full max-w-[210px] lg:max-w-none"
          />
        </a>

        <div aria-hidden="true" className="hidden min-w-16 flex-1 flex-col justify-center gap-[5px] lg:flex">
          <span className="block h-[3px] w-full bg-brand" />
          <span className="block h-[2px] w-full bg-brand" />
          <span className="block h-px w-full bg-brand" />
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="ml-auto hidden items-end gap-x-4 text-[15px] lg:flex">
          {nav.map((item) => {
            const on = active === `#${item.href.split("#")[1]}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={jump(item.href)}
                aria-current={on ? "true" : undefined}
                className={`inline-flex min-h-11 flex-col justify-center whitespace-nowrap ${
                  on ? "text-brand" : "hover:text-brand"
                }`}
              >
                {item.label}
                <ActiveMark on={on} />
              </a>
            );
          })}
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 flex-col justify-center whitespace-nowrap font-semibold text-brand"
          >
            {business.phone}
            <ActiveMark on={false} />
          </a>
        </nav>
      </div>

      {open ? (
        <nav id="site-menu" aria-label="Sections" className="flex flex-col px-5 pb-3 lg:hidden">
          {nav.map((item) => {
            const on = active === `#${item.href.split("#")[1]}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={jump(item.href)}
                aria-current={on ? "true" : undefined}
                className={`inline-flex min-h-11 w-full flex-col justify-center ${
                  on ? "text-brand" : ""
                }`}
              >
                {item.label}
                <ActiveMark on={on} />
              </a>
            );
          })}
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 w-full items-center font-semibold text-brand"
          >
            {business.phone}
          </a>
        </nav>
      ) : null}

      <Divider className="lg:hidden" />
    </header>
  );
}
