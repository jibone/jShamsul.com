type linksType = {
  [key: string]: {
    name: string;
    link: string;
    url: string;
  };
};
const ASIDE_LINKS: linksType = {
  twitter: {
    name: "Twitter",
    link: "twitter.com/jibone",
    url: "https://twitter.com/jibone",
  },
  github: {
    name: "Github",
    link: "github.com/jibone",
    url: "https://github.com/jibone",
  },
  grab: {
    name: "Grab",
    link: "grab.com",
    url: "https://grab.com",
  },
  unplayed: {
    name: "Unplayed",
    link: "jibone.notion.site/jibone/unplayed",
    url: "https://jibone.notion.site/jibone/Unplayed-b85d75ba96864600a143b27e53ec0a79",
  },
};

const Aside: React.FC<{ links?: string[] | undefined }> = ({ links }) => {
  // Return null if there is no link.
  if (links === undefined || links.length === 0) {
    return null;
  }

  const asideList = links.map((i) => {
    const item = ASIDE_LINKS[i];
    return (
      <div key={item.name} className="mt-4">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={item.url}
            className="text-stone-500 border-solid border-b-2 hover:border-black hover:text-stone-800 duration-200 transition-colors"
          >
            {item.link}
          </a>
          <div>{item.name}</div>
        </div>
      </div>
    );
  });

  return <aside className="mb-12 col-span-3 text-xs text-right md:col-span-1">{asideList}</aside>;
};

export default Aside;
