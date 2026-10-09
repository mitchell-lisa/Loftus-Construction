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

  const jump = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <a
          href="/#top"
          onClick={jump("/#top")}
          className="flex min-h-11 w-full min-w-0 max-w-[300px] items-center sm:max-w-[340px] lg:w-[320px] lg:max-w-none lg:shrink-0"
        >
          <Image
            src="/images/logos/current-logo.png"
            alt={business.legalName}
            width={1200}
            height={285}
            loading="eager"
            sizes="(min-width: 1024px) 320px, 300px"
            className="h-auto w-full"
          />
        </a>

        <nav className="hidden items-center gap-x-4 text-[15px] lg:flex">
          {nav.map((item) => {
            const on = active === `#${item.href.split("#")[1]}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={jump(item.href)}
                aria-current={on ? "true" : undefined}
                className={`inline-flex min-h-11 items-center border-b-2 ${
                  on ? "border-brand text-brand" : "border-transparent hover:text-brand"
                }`}
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

      <nav
        aria-label="Sections"
        className="-mt-1 flex gap-x-5 overflow-x-auto px-5 pb-2 text-[15px] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {nav.map((item) => {
          const on = active === `#${item.href.split("#")[1]}`;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={jump(item.href)}
              aria-current={on ? "true" : undefined}
              className={`inline-flex min-h-11 shrink-0 items-center border-b-2 ${
                on ? "border-brand text-brand" : "border-transparent"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <Divider />
    </header>
  );
}
