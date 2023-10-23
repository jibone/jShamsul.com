import Link from "next/link";
import { Logo } from "@/components/Logo";

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
        <Link
          key="home"
          href="/"
          className="sm:block font-medium text-gray-900 border-b-4 border-white hover:border-pink-400"
        >
          Home
        </Link>
        <span> / </span>
        <Link
          key="about"
          href="/about"
          className="sm:block font-medium text-gray-900 border-b-4 border-white hover:border-pink-400"
        >
          About
        </Link>
      </div>
    </header>
  );
}
