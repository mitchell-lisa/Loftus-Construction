import Divider from "./Divider";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-white text-ink">
      <Divider />
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 lg:pb-14">
        <img
          src="/images/logos/dimensional-letters.svg"
          alt="Loftus Construction, Inc., engineers and contractors, with a brick arch above the name"
          width={687}
          height={248}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-[440px]"
        />
        <p className="mt-8 text-[16px] text-[color:var(--ink-muted)]">
          {business.street}, {business.city}, {business.state} {business.zip}
        </p>
        <p className="mt-1 text-[16px]">
          <a href={business.phoneHref} className="inline-flex min-h-11 items-center text-brand">
            {business.phone}
          </a>
          {business.fax ? (
            <span className="text-[color:var(--ink-muted)]">, fax {business.fax}</span>
          ) : null}
        </p>
        <p className="text-[16px]">
          <a
            href={`mailto:${business.email}`}
            className="inline-flex min-h-11 items-center text-brand"
          >
            {business.email}
          </a>
        </p>
        {business.status === "demo" ? (
          <p className="mt-8 max-w-[62ch] border-t border-[color:var(--hairline)] pt-5 text-[14px] leading-relaxed text-[color:var(--ink-muted)]">
            This page is a preview built by {business.builder.name}. It is not the official
            website of {business.legalName}, and the request form does not send.
          </p>
        ) : null}
      </div>
    </footer>
  );
}
