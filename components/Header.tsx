"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import Logo from "./Logo";
import MenuDrawer from "./MenuDrawer";
import { currentHref, nav } from "./nav";

export default function Header() {
  const pathname = usePathname();
  const active = currentHref(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-header=""
        className={`on-dark sticky top-0 z-50 bg-navy text-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgb(255_255_255/0.14)]" : ""
        }`}
      >
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="wrap flex h-[var(--header-h)] items-center gap-6">
          <Link href="/" aria-label={`${business.legalName}, home`} className="flex shrink-0 items-center py-2">
            <Logo className="w-[156px] sm:w-[176px] lg:w-[206px]" />
          </Link>

          <div aria-hidden="true" className="hidden min-w-6 flex-1 lg:block">
            <div className="speed text-white" style={{ "--speed-1": "3px", "--speed-gap": "5px" } as React.CSSProperties}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-x-5 lg:flex xl:gap-x-7">
            {nav.map((item) => {
              const on = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={on ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center whitespace-nowrap text-[15px] transition-colors ${
                    on ? "text-white" : "text-mist hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-2 h-[2px] origin-left bg-white transition-transform duration-300 ${
                      on ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center whitespace-nowrap border border-white/70 px-4 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              {business.phone}
            </a>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex min-h-11 items-center gap-3 pl-3 text-[15px] font-semibold lg:hidden"
          >
            Menu
            <span aria-hidden="true" className="flex w-7 flex-col items-end gap-[5px]">
              <span className="block h-[3px] w-7 bg-white" />
              <span className="block h-[2px] w-[22px] bg-white" />
              <span className="block h-px w-[17px] bg-white" />
            </span>
          </button>
        </div>
      </header>
      <MenuDrawer
        open={open}
        active={active}
        onClose={close}
      />
    </>
  );
}
