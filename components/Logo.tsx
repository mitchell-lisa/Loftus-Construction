import Image from "next/image";
import { firm } from "@/lib/site";

export default function Logo({ white, className = "" }: { white: boolean; className?: string }) {
  return (
    <Image
      src={white ? "/images/logos/current-logo-white.png" : "/images/logos/current-logo.png"}
      alt={firm.legalName}
      width={1200}
      height={285}
      priority
      className={`logo block max-w-none ${className}`}
    />
  );
}
