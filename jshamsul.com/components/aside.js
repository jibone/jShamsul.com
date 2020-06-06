import { ASIDE_LINKS } from '../lib/constants';
// Update the aside collection 👆. I might want to display different aside on
// different pages. Call this component with an array of links based on what is
// in the aside collections.
//
// example: <Aside links={['twitter', 'github', 'grab']} />

export default function Aside({ links }) {

  // Return null if there is no aside.
  if (links === undefined || links.length === 0) {
    return (null);
  }

  const asideList = links.map((i) => {
    const item = ASIDE_LINKS[i];

    return (
      <div key={item.name} className="mt-4">
        <div>
          <a target="_blank" href={item.url} className="border-solid border-b-2 hover:border-black duration-200 transition-colors">
            {item.link}
          </a>
        </div>
        <div>
          {item.name}
        </div>
      </div>
    );
  });

  return (
    <aside className="mb-12 col-span-3 text-xs text-right md:col-span-1">
      {asideList}
    </aside>
  );

}
