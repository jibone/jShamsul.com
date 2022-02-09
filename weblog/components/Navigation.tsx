import Link from "next/link";

export const nav_links = [
  {
    path: "/",
    name: "Home",
    external: false,
  },
  {
    path: "/about",
    name: "About",
    external: false,
  },
  {
    path: "https://jibone.notion.site/jibone/Unplayed-b85d75ba96864600a143b27e53ec0a79",
    name: "Unplayed",
    external: true,
  },
];

const Navigation: React.FC<{ path: string }> = ({ path }) => {
  const navigationLinks = nav_links.map((link, index) => {
    let borderStyle = "border-solid border-b-4 hover:border-black duration-200 transition-colors";
    if (link.path !== path) {
      borderStyle = `border-transparent ${borderStyle}`;
    }

    if (link.external) {
      return (
        <span key={link.name + "-" + index}>
          {index > 0 && " / "}
          <a className={borderStyle} href={link.path} target="_blank">
            {link.name}
          </a>
        </span>
      );
    }

    return (
      <span key={link.name + "-" + index}>
        {index > 0 && " / "}
        <Link href={link.path}>
          <a className={borderStyle}>{link.name}</a>
        </Link>
      </span>
    );
  });

  return (
    <div className="col-span-2 flex items-end md:col-span-1">
      <nav className="flex-1 text-center md:text-right">{navigationLinks}</nav>
    </div>
  );
};

export default Navigation;
