import Link from 'next/link';
import { NAV_LINKS } from '../lib/constants';

export default function Navigation({ path }) {
  const navigationLinks = NAV_LINKS.map((link, index) => {
    let borderStyle = "border-solid border-b-4 hover:border-black duration-200 transition-colors";
    if (link.path !== path) {
      borderStyle = `border-transparent ${borderStyle}`;
    }

    return (
      <span key={link.name + "-" + index}>
        {index > 0 && " / "}
        <Link href={link.path}>
          <a className={borderStyle}>
            {link.name}
          </a>
        </Link>
      </span>
    );
  });

  const formatNavigationLinks = navigationLinks.join(" / ");

  return (
    <div className="col-span-2 flex items-end md:col-span-1">
      <nav className="flex-1 text-center md:text-right">
        {navigationLinks}
      </nav>
    </div>
  );
}
