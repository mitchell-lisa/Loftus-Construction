import { business } from "@/lib/business";

/**
 * Phone-only call bar. Heavy civil work is won on the phone, not through a form,
 * and this keeps the office number one tap away on a handset without putting a
 * floating element over the desktop layout.
 */
export default function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-girder/97 backdrop-blur-[2px] lg:hidden">
      <a
        href={business.phoneHref}
        data-primary="true"
        className="flex min-h-14 items-center justify-center gap-2 px-5 text-[17px] font-semibold text-white"
      >
        Call {business.phone}
      </a>
    </div>
  );
}
