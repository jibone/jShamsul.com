import Link from "next/link";
import { Nav } from "@/components";

export default function Header({ page }: { page: string }) {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">JSHAMSUL<span>.COM</span></Link>
      <Nav page={page} />
      <span className="header-index" aria-hidden="true">[ EST. MMXII ]</span>
    </header>
  );
}
