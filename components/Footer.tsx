import Link from "next/link";
import { firm, nav, prequalifications } from "@/lib/site";
import { theme } from "@/lib/theme";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo white={theme.footerWhite} className="h-[40px] w-auto" />
          <p className="mt-6 max-w-[34ch] foot-muted">Heavy civil construction from <span className="whitespace-nowrap">King of Prussia,</span> Pennsylvania, since {firm.founded}.</p>
        </div>
        <div className="lg:col-span-3">
          <p className="foot-h">Office</p>
          <address className="not-italic">
            {firm.street}<br />{firm.city}, {firm.state} {firm.zip}
          </address>
          <p className="mt-4">
            <a href={firm.phoneHref} className="foot-link">{firm.phone}</a><br />
            <span className="foot-muted">Fax {firm.fax}</span><br />
            <a href={`mailto:${firm.email}`} className="foot-link break-all">{firm.email}</a>
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="foot-h">Site</p>
          <ul className="space-y-1">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="foot-link">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="foot-h">Prequalified with</p>
          <p className="foot-muted text-[14px] leading-relaxed">{prequalifications.slice(0, 7).join(", ")} and more.</p>
          <Link href="/about#prequalifications" className="foot-link mt-2 inline-block text-[14px]">Full list</Link>
        </div>
      </div>
      <div className="wrap foot-base flex flex-col gap-2 py-6 text-[13px] lg:flex-row lg:items-center lg:justify-between">
        <p>{firm.legalName}, {firm.descriptor}</p>
        <ul className="foot-legal">
          <li><Link href="/privacy" className="foot-link">Privacy Policy</Link></li>
          <li><Link href="/terms" className="foot-link">Terms of Use</Link></li>
          <li><Link href="/accessibility" className="foot-link">Accessibility</Link></li>
        </ul>
        <p>Design preview by MJL Collective. Not the live site.</p>
      </div>
    </footer>
  );
}
