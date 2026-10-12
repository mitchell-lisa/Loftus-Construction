"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { business } from "@/lib/business";
import Logo from "./Logo";
import { nav } from "./nav";
import SpeedLines from "./SpeedLines";

/**
 * Full screen phone menu. Rendered into <body>, outside the header, so nothing
 * above it can clip or blur it. Locks page scroll, traps focus, closes on Escape.
 */
export default function MenuDrawer({
  open,
  active,
  onClose,
}: {
  open: boolean;
  active: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    const inerted: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>("[data-header], main, footer, [data-banner], [data-sticky]").forEach((el) => {
      if (!el.hasAttribute("inert")) {
        el.setAttribute("inert", "");
        inerted.push(el);
      }
    });
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("[data-close]")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>("a[href], button"));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) onClose();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.classList.remove("menu-open");
      inerted.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      id="site-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="on-dark grid-paper fixed inset-0 z-[100] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-navy text-white lg:hidden"
    >
      <div className="wrap flex h-[68px] shrink-0 items-center">
        <Link href="/" onClick={onClose} aria-label={`${business.legalName}, home`} className="flex items-center py-2">
          <Logo className="w-[156px] sm:w-[176px]" />
        </Link>
        <button
          type="button"
          data-close=""
          onClick={onClose}
          className="ml-auto inline-flex min-h-11 items-center gap-3 pl-3 text-[15px] font-semibold"
        >
          Close
          <span aria-hidden="true" className="relative block h-5 w-7">
            <span className="absolute left-0 top-1/2 block h-[2px] w-7 -translate-y-1/2 rotate-45 bg-white" />
            <span className="absolute left-0 top-1/2 block h-[2px] w-7 -translate-y-1/2 -rotate-45 bg-white" />
          </span>
        </button>
      </div>

      <nav aria-label="Primary" className="wrap mt-4 flex-1">
        <ul className="border-t border-white/20">
          {nav.map((item, i) => {
            const on = active === item.href;
            return (
              <li
                key={item.href}
                className="menu-item border-b border-white/20"
                style={{ animationDelay: `${60 + i * 45}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={on ? "page" : undefined}
                  className="flex min-h-[64px] items-center gap-4 py-2 font-display text-[2.1rem] leading-none"
                >
                  <span className={on ? "text-white" : "text-white/85"}>{item.label}</span>
                  {on ? <SpeedLines weight="fine" className="ml-2 w-16 text-white" /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="wrap shrink-0 pb-10 pt-10">
        <a
          href={business.phoneHref}
          data-primary="true"
          className="flex min-h-14 w-full items-center justify-center bg-white px-5 text-[18px] font-semibold text-navy"
        >
          Call {business.phone}
        </a>
        <a href={`mailto:${business.email}`} className="mt-3 flex min-h-11 items-center text-[15px] text-mist">
          {business.email}
        </a>
        <p className="text-[15px] text-mist">
          {business.street}, {business.city}, {business.state} {business.zip}
        </p>
      </div>
    </div>,
    document.body,
  );
}
