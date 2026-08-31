import Image from "next/image";
import { business } from "@/lib/business";

const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Record", href: "#record" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="bg-girder text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4">
        <a href="#top" className="flex min-h-11 items-center">
          <Image
            src="/images/loftus-logo.png"
            alt={business.legalName}
            width={367}
            height={88}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] uppercase tracking-[0.06em] text-steel">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center hover:text-white lg:min-h-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            data-primary="true"
            className="hidden font-semibold tracking-normal text-white lg:inline-flex lg:min-h-11 lg:items-center"
          >
            {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
