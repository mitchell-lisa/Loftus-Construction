import Link from "next/link";
import Image from "next/image";
import { nav } from "./nav";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <Image
            src="/images/logos/current-logo-white.png"
            alt={business.legalName}
            width={1200}
            height={285}
            className="h-auto w-[200px]"
          />
        </div>
        <div className="text-[15px] leading-7 md:col-span-4">
          <p>{business.street}</p>
          <p>{business.city}, {business.state} {business.zip}</p>
          <p className="mt-4"><a href={business.phoneHref} className="font-semibold">{business.phone}</a></p>
          <p><a href={`mailto:${business.email}`} className="break-all text-mist hover:text-white">{business.email}</a></p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-1 text-[15px] leading-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-white/15 py-6 text-[13px] text-mist sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {business.legalName}</p>
        {business.status === "demo" ? <p>Preview by {business.builder.name}. Not the official site.</p> : null}
      </div>
    </footer>
  );
}
