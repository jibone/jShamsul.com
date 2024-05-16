import Link from "next/link";

export default function Nav({ page }: { page: string }) {
  const highlightClass = `underline underline-offset-2 decoration-2 decoration-purple-500 text-slate-800`;
  return (
    <nav className="mt-4 text-slate-500">
      <Link href="/" className={page === "home" ? highlightClass : ``}>
        home
      </Link>{" "}
      /{" "}
      <Link href="/about" className={page === "about" ? highlightClass : ``}>
        about
      </Link>{" "}
      /{" "}
      <Link
        href="/connect"
        className={page === "connect" ? highlightClass : ``}
      >
        connect
      </Link>
    </nav>
  );
}
