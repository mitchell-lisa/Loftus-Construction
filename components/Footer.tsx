import { Flank } from "./Rule";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-girder text-steel">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-12 lg:pb-12">
        <Flank tone="dark" className="mb-1">
          <p className="text-[16px] font-semibold text-white">{business.legalName}</p>
        </Flank>
        <p className="mt-1 text-[15px]">{business.descriptor}</p>
        <p className="mt-4 text-[15px]">
          {business.street}, {business.city}, {business.state} {business.zip}
        </p>
        <p className="mt-1 text-[15px]">
          <a href={business.phoneHref} className="inline-block py-1 text-white hover:underline">
            {business.phone}
          </a>
          {business.fax ? <span className="text-steel">, fax {business.fax}</span> : null}
        </p>
        <p className="mt-1 text-[15px]">
          <a href={`mailto:${business.email}`} className="inline-block py-1 text-white hover:underline">
            {business.email}
          </a>
        </p>

        {business.status === "demo" ? (
          <p className="mt-8 max-w-[62ch] border-t border-white/12 pt-5 text-[13.5px] leading-relaxed text-steel">
            This page is a speculative preview built by {business.builder.name}. It is
            not the official website of {business.legalName} and was not commissioned by
            the company, and carries no forms. The company logo appears here to
            identify the business and will be removed on request.
          </p>
        ) : null}
      </div>
    </footer>
  );
}
