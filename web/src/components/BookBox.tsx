/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type BookBoxProps = {
  url: string;
  cover: string;
  title: string;
  subtitle: string;
  author: string;
};

export default async function BookBox({
  url,
  cover,
  title,
  subtitle,
  author,
}: BookBoxProps) {
  return (
    <div
      key={url}
      className="flex space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4"
    >
      <div className="w-14 m-0">
        <img
          src={cover}
          alt={`book cover for ${title}`}
          className="!my-0 rounded-lg border border-white drop-shadow-lg"
        />
      </div>
      <div className="flex-1">
        <div>
          <Link href={url}>{title}</Link>
        </div>
        <div className="italic">{subtitle}</div>
        <div>By {author}</div>
      </div>
    </div>
  );
}
