import Legal from "@/components/Legal";
import { meta } from "@/lib/meta";

export const metadata = meta("Terms of Use", "Terms of Use for the Loftus Construction, Inc. website.", "/terms");

export default function Page() {
  return <Legal doc="terms" />;
}
