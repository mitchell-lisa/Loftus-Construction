"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "./nav";
import { business } from "@/lib/business";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="on-dark sticky top-0 z-40 border-b-4 border-navy bg-steel-900 text-white">
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label={`${business.shortName}, home`} className="flex shrink-0 items-center">
          <Image
            src="/images/logos/current-logo-white.png"
            alt={business.legalName}
            width={1200}
            height={285}
            priority
            className="h-[38px] w-auto lg:h-[50px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="cond flex items-center gap-8 text-[19px] !font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={`py-2 ${active(item.href) ? "text-white underline decoration-[3px] underline-offset-[10px]" : "text-steel-200 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={business.phoneHref} className="bg-navy px-4 py-2 text-white">
                {business.phone}
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu"
          className="cond flex h-11 items-center gap-3 px-1 text-[20px] text-white lg:hidden"
        >
          Menu
          <span aria-hidden className="flex w-5 flex-col gap-[5px]">
            <span className="h-[3px] bg-white" />
            <span className="h-[3px] bg-white" />
          </span>
        </button>
      </div>

      <div
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="on-dark fixed inset-0 z-50 h-[100dvh] overflow-y-auto bg-navy text-white lg:hidden"
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between">
          <Image
            src="/images/logos/current-logo-white.png"
            alt=""
            width={1200}
            height={285}
            className="h-[38px] w-auto"
          />
          <button type="button" onClick={() => setOpen(false)} className="cond flex h-11 items-center gap-3 px-1 text-[20px]">
            Close
            <span aria-hidden className="relative block h-5 w-5">
              <span className="absolute left-0 top-1/2 h-[2px] w-5 rotate-45 bg-white" />
              <span className="absolute left-0 top-1/2 h-[2px] w-5 -rotate-45 bg-white" />
            </span>
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap pb-12 pt-8">
          <ul className="border-t border-white/20">
            <li className="border-b border-white/20">
              <Link href="/" className="cond flex min-h-16 items-center text-[44px] leading-none">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/20">
                <Link
                  href={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                  className="cond flex min-h-16 items-center text-[44px] leading-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-[17px]">
            <a href={business.phoneHref} className="block font-semibold">{business.phone}</a>
            <a href={`mailto:${business.email}`} className="block break-all text-mist">{business.email}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
