import Link from "next/link";
import Divider from "./Divider";
import { business } from "@/lib/business";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Record", href: "/record" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="on-dark bg-navy text-white">
      <Divider tone="white" />
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 lg:pb-14">
        <img
          src="/images/logos/dimensional-letters-white.svg"
          alt="Loftus Construction, Inc., engineers and contractors, with a brick arch above the name"
          width={687}
          height={248}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-[420px]"
        />
        <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-5">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-[15px] text-mist hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-[16px] text-mist">
          {business.street}, {business.city}, {business.state} {business.zip}
        </p>
        <p className="mt-1 text-[16px]">
          <a href={business.phoneHref} className="inline-flex min-h-11 items-center text-white">
            {business.phone}
          </a>
          {business.fax ? <span className="text-mist">, fax {business.fax}</span> : null}
        </p>
        <p className="text-[16px]">
          <a
            href={`mailto:${business.email}`}
            className="inline-flex min-h-11 items-center text-white"
          >
            {business.email}
          </a>
        </p>
        {business.status === "demo" ? (
          <p className="mt-8 max-w-[62ch] border-t border-rule pt-5 text-[14px] leading-relaxed text-mist">
            This page is a preview built by {business.builder.name}. It is not the official
            website of {business.legalName}, and the request form does not send.
          </p>
        ) : null}
      </div>
    </footer>
  );
}
