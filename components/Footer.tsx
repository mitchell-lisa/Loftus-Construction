import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--hairline)] bg-white text-ink">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-12 lg:pb-14">
        {/* Vector wall-sign art. Navy is the file's own ink. Do not recolor it. */}
        <img
          src="/images/logos/dimensional-letters.svg"
          alt="Loftus Construction, Inc., engineers and contractors, with a brick arch above the name"
          width={687}
          height={248}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-[420px]"
        />

        <p className="mt-8 text-[15.5px] text-[color:var(--ink-muted)]">
          {business.street}, {business.city}, {business.state} {business.zip}
        </p>
        <p className="mt-1 text-[15.5px]">
          <a href={business.phoneHref} className="inline-block py-1 text-brand hover:text-ink">
            {business.phone}
          </a>
          {business.fax ? (
            <span className="text-[color:var(--ink-muted)]">, fax {business.fax}</span>
          ) : null}
        </p>
        <p className="mt-1 text-[15.5px]">
          <a
            href={`mailto:${business.email}`}
            className="inline-block py-1 text-brand hover:text-ink"
          >
            {business.email}
          </a>
        </p>

        {business.status === "demo" ? (
          <p className="mt-8 max-w-[62ch] border-t border-[color:var(--hairline)] pt-5 text-[13.5px] leading-relaxed text-[color:var(--ink-muted)]">
            This page is a preview built by {business.builder.name}. It is not the
            official website of {business.legalName}, and it has no forms.
          </p>
        ) : null}
      </div>
    </footer>
  );
}
