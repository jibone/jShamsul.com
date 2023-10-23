import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";

export default function Logo() {
  return (
    <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        jShamsul.
      </Link>
    </h1>
  );
}

// TODO: create a proper logo with SVG and return it here...
