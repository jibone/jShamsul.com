import { Logo } from "@/components/Logo";
import { PalestineLink } from "@/components/PalestineLink";

export default function Header() {
  return (
    <header className="flex items-baseline justify-between py-10">
      <div>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
        </div>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x6">
        <PalestineLink href="/" textLabel="Home" />
        <PalestineLink href="/about" textLabel="About" />
      </div>
    </header>
  );
}
