import { business } from "@/lib/business";

export default function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-navy lg:hidden">
      <a
        href={business.phoneHref}
        data-primary="true"
        className="flex min-h-14 items-center justify-center px-5 text-[17px] font-semibold text-white"
      >
        Call {business.phone}
      </a>
    </div>
  );
}
