import Image from "next/image";
import { business } from "@/lib/business";

/** The real Loftus wordmark, in white for the navy bar. Sized by width, never cropped. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logos/current-logo-white.png"
      alt={business.legalName}
      width={1200}
      height={285}
      loading="eager"
      unoptimized
      className={`block h-auto max-w-none ${className}`}
    />
  );
}
