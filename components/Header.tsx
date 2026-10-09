"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import Divider from "./Divider";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Record", href: "/record" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function currentHref(pathname: string) {
  if (pathname === "/projects" || pathname.startsWith("/projects/")) return "/projects";
  return nav.find((item) => item.href === pathname)?.href ?? "";
}

function ActiveMark({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-1 flex w-full flex-col gap-[3px] ${on ? "" : "invisible"}`}
    >
      <span className="block h-[2px] w-full bg-white" />
      <span className="block h-px w-full bg-white" />
      <span className="block h-px w-full bg-white" />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const active = currentHref(pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const el = headerRef.current;
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
    if (!open) return;
    const header = headerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const inerted: HTMLElement[] = [];
    document.querySelectorAll("main, footer, [data-banner], [data-sticky]").forEach((node) => {
      const el = node as HTMLElement;
      if (!el.hasAttribute("inert")) {
        el.setAttribute("inert", "");
        inerted.push(el);
      }
    });

    const focusable = () => {
      if (!header) return [];
      return Array.from(header.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(
        (el) => el.getClientRects().length > 0,
      );
    };

    const menuLink = header?.querySelector<HTMLElement>("#site-menu a[href]");
    menuLink?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      inerted.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="on-dark sticky top-0 z-50 max-h-[calc(100svh-3.5rem)] overflow-y-auto bg-chrome text-white lg:max-h-none lg:overflow-visible"
    >
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <Link
          href="/"
          className="flex min-h-11 min-w-0 flex-1 items-center lg:w-[220px] lg:flex-none"
        >
          <Image
            src="/images/logos/current-logo-white.png"
            alt={business.legalName}
            width={1200}
            height={285}
            loading="eager"
            unoptimized
            sizes="(min-width: 1024px) 220px, 190px"
            className="h-auto w-full max-w-[190px] lg:max-w-none"
          />
        </Link>

        <div aria-hidden="true" className="hidden min-w-8 flex-1 flex-col justify-center gap-[5px] lg:flex">
          <span className="block h-[3px] w-full bg-white" />
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-px w-full bg-white" />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 w-16 shrink-0 items-center justify-end font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav aria-label="Primary" className="ml-auto hidden items-end gap-x-3 text-[14px] lg:flex xl:gap-x-4 xl:text-[15px]">
          {nav.map((item) => {
            const on = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={`inline-flex min-h-11 flex-col justify-center whitespace-nowrap ${
                  on ? "text-white" : "text-chrome-muted hover:text-white"
                }`}
              >
                {item.label}
                <ActiveMark on={on} />
              </Link>
            );
          })}
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 flex-col justify-center whitespace-nowrap font-semibold text-white"
          >
            {business.phone}
            <ActiveMark on={false} />
          </a>
        </nav>
      </div>

      <nav
        id="site-menu"
        aria-label="Primary"
        hidden={!open}
        className="flex flex-col px-5 pb-4 lg:hidden"
      >
        {nav.map((item) => {
          const on = active === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={on ? "page" : undefined}
              className={`inline-flex min-h-11 w-full flex-col justify-center ${
                on ? "text-white" : "text-chrome-muted"
              }`}
            >
              {item.label}
              <ActiveMark on={on} />
            </Link>
          );
        })}
        <a
          href={business.phoneHref}
          data-primary="true"
          className="inline-flex min-h-11 w-full items-center font-semibold text-white"
        >
          {business.phone}
        </a>
      </nav>

      <Divider tone="white" className="lg:hidden" />
    </header>
  );
}
