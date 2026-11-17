import Link from "next/link";

export default function Nav({ page }: { page: string }) {
  const links = [
    ["home", "/"],
    ["about", "/about"],
    ["connect", "/connect"],
    ["bookshelf", "/bookshelf"],
  ];

  return (
    <nav className="site-nav" aria-label="Main navigation">
      {links.map(([label, href], index) => (
        <span className="nav-item" key={href}>
          {index > 0 && <span className="nav-slash" aria-hidden="true">/</span>}
          <Link href={href} aria-current={page === label ? "page" : undefined} className={page === label ? "active" : undefined}>{label}</Link>
        </span>
      ))}
    </nav>
  );
}
