import Link from "next/link";
import { business } from "@/lib/business";
import { nav } from "./nav";
import SpeedLines from "./SpeedLines";

export default function Footer() {
  return (
    <footer className="on-dark grid-paper bg-navy text-white">
      <SpeedLines reveal className="text-white" />
      <div className="wrap grid gap-12 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pb-20 lg:pt-20">
        <div>
          <img
            src="/images/logos/dimensional-letters-white.svg"
            alt="Loftus Construction, Inc., engineers and contractors, with the brick arch from the company sign"
            width={687}
            height={248}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-[400px]"
          />
          <p className="mt-8 max-w-[34ch] font-display text-[1.35rem] leading-snug text-white">
            Engineers and contractors, building bridges, walls and dams since {business.foundedYear}.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <nav aria-label="Footer">
            <ul>
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center text-[16px] text-mist hover:text-white">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[16px] text-mist hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-[16px]">
            <a href={business.phoneHref} className="inline-flex min-h-11 items-center font-semibold text-white">
              {business.phone}
            </a>
            {business.fax ? <p className="text-mist">Fax {business.fax}</p> : null}
            <a
              href={`mailto:${business.email}`}
              className="mt-1 inline-flex min-h-11 items-center break-all text-white underline decoration-white/40 underline-offset-4"
            >
              {business.email}
            </a>
            <p className="mt-2 text-mist">
              {business.street}
              <br />
              {business.city}, {business.state} {business.zip}
            </p>
          </div>
        </div>
      </div>
      {business.status === "demo" ? (
        <div className="border-t border-white/15">
          <p className="wrap py-6 text-[14px] leading-relaxed text-mist">
            Preview built by {business.builder.name}. Not the official website of {business.legalName} The
            request form does not send.
          </p>
        </div>
      ) : null}
    </footer>
  );
}
