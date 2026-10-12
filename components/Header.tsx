"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firm, nav } from "@/lib/site";
import { theme } from "@/lib/theme";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const overlay = theme.overlayHeader && pathname === "/" && !scrolled;
  const white = theme.headerWhite || overlay;

  return (
    <header className={`site-header ${overlay ? "is-overlay" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" aria-label={`${firm.shortName}, home`} className="header-logo">
          <Logo white={white} className="h-[34px] w-auto lg:h-[44px]" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="header-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={active(item.href) ? "page" : undefined} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={firm.phoneHref} className="nav-phone">{firm.phone}</a>
            </li>
          </ul>
        </nav>
        <button type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="menu" className="menu-btn lg:hidden">
          Menu
          <span aria-hidden className="flex w-6 flex-col gap-[6px]">
            <span className="block h-[2px] bg-current" />
            <span className="block h-[2px] bg-current" />
          </span>
        </button>
      </div>

      <div id="menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open} className="menu fixed inset-0 z-50 h-[100dvh] w-screen overflow-y-auto lg:hidden">
        <div className="wrap header-row">
          <Logo white={theme.menuWhite} className="h-[34px] w-auto" />
          <button type="button" onClick={() => setOpen(false)} className="menu-btn">
            Close
            <span aria-hidden className="relative block h-6 w-6">
              <span className="absolute left-0 top-1/2 h-[2px] w-6 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-[2px] w-6 -rotate-45 bg-current" />
            </span>
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap pb-12 pt-6">
          <ul className="menu-list">
            {[{ href: "/", label: "Home" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={(item.href === "/" ? pathname === "/" : active(item.href)) ? "page" : undefined} className="menu-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-meta">
            <a href={firm.phoneHref} className="block">{firm.phone}</a>
            <a href={`mailto:${firm.email}`} className="block break-all">{firm.email}</a>
            <p>{firm.street}, {firm.city}, {firm.state}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
