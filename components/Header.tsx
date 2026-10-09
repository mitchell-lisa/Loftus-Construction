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
    const sections = nav
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
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

  const itemClass = (on: boolean) =>
    `inline-flex min-h-11 items-center border-b-2 ${
      on ? "border-brand text-brand" : "border-transparent hover:text-brand"
    }`;

  return (
    <header ref={ref} className="sticky top-0 z-50 bg-white text-navy">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a
          href="/#top"
          onClick={jump("/#top")}
          className="flex min-h-11 min-w-0 flex-1 items-center lg:w-[300px] lg:flex-none"
        >
          <Image
            src="/images/logos/current-logo.png"
            alt={business.legalName}
            width={1200}
            height={285}
            loading="eager"
            sizes="(min-width: 1024px) 300px, 220px"
            className="h-auto w-full max-w-[220px] lg:max-w-none"
          />
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="ml-auto hidden items-center gap-x-4 text-[15px] lg:flex">
          {nav.map((item) => {
            const on = active === `#${item.href.split("#")[1]}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={jump(item.href)}
                aria-current={on ? "true" : undefined}
                className={itemClass(on)}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 items-center font-semibold text-brand"
          >
            {business.phone}
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
                className={`${itemClass(on)} w-full`}
              >
                {item.label}
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

      <Divider />
    </header>
  );
}
