import Legal from "@/components/Legal";
import { meta } from "@/lib/meta";

export const metadata = meta("Privacy Policy", "Privacy Policy for the Loftus Construction, Inc. website.", "/privacy");

export default function Page() {
  return <Legal doc="privacy" />;
}
