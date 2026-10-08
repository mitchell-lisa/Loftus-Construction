"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Record", href: "#record" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

/**
 * The bar is pinned, so two things have to stay true.
 *
 * Its height is published as --header-h and kept current with a ResizeObserver,
 * because that is what every section's scroll-margin is measured against: land a
 * section any higher and the bar covers its own heading. On a handset the bar
 * carries the mark on one line and the sections on a second line that scrolls
 * sideways, which keeps it about a tenth of the viewport rather than a third.
 *
 * The section under the reading line is marked with aria-current so the bar says
 * where you are, not just where you can go.
 */
export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string>("");

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
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Watch a band just under the bar rather than the whole viewport, so the
    // active item changes when a section reaches the reading line.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /**
   * Smooth scrolling lives here rather than on `html`, because a global
   * scroll-behavior animates every programmatic window.scrollTo as well, which
   * silently breaks scripted scrolling and any lazy image below the fold.
   */
  const jump = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", href);
    setActive(href);
  };

  const link = (item: (typeof nav)[number], extra = "") => {
    const on = active === item.href;
    return (
      <a
        key={item.href}
        href={item.href}
        onClick={jump(item.href)}
        aria-current={on ? "true" : undefined}
        className={`inline-flex min-h-11 shrink-0 items-center border-b-2 ${
          on ? "border-brand text-brand" : "border-transparent text-ink hover:text-brand"
        } ${extra}`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-[color:var(--hairline)] bg-white text-ink"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between gap-6 py-3 lg:py-3.5">
          <a
            href="#top"
            onClick={jump("#top")}
            className="flex min-h-11 w-full min-w-0 max-w-[340px] items-center lg:w-[320px] lg:max-w-none lg:shrink-0"
          >
            <Image
              src="/images/logos/current-logo.png"
              alt={business.legalName}
              width={1200}
              height={285}
              loading="eager"
              sizes="(min-width: 1024px) 320px, 340px"
              className="h-auto w-full"
            />
          </a>

          <nav className="hidden items-center gap-x-4 text-[13px] uppercase tracking-[0.05em] lg:flex">
            {nav.map((item) => link(item))}
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center font-semibold tracking-normal text-brand"
            >
              {business.phone}
            </a>
          </nav>
        </div>

        {/* Handset row: one line, scrolled sideways rather than wrapped. */}
        <nav
          aria-label="Sections"
          className="-mx-5 flex gap-x-5 overflow-x-auto px-5 pb-0.5 text-[12.5px] uppercase tracking-[0.06em] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {nav.map((item) => link(item))}
        </nav>
      </div>
    </header>
  );
}
