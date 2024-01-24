import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { ChangelogItems } from "@/components/Changelog";

export default async function ChangeLog() {
  const filepath = `${process.cwd()}/contents/changelogs`;
  const fileList = fs.readdirSync(filepath);
  const changelogFileList = fileList.sort().reverse();
  const changelogs = [];

  for (let i = 0; i < changelogFileList.length; i++) {
    const filePath = `${process.cwd()}/contents/changelogs/${changelogFileList[i]}`;
    let pageContents = fs.readFileSync(filePath, "utf8");

    const compiled = await compileMDX<{ date: string }>({
      source: pageContents,
      options: { parseFrontmatter: true },
    });

    changelogs.push(compiled);
  }

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Changelog.
          </h1>
          <div className="md:w-4/5">
            <ul role="list" className="space-y-6">
              {changelogs.map((item, idx: number) => {
                return (
                  <ChangelogItems
                    key={idx}
                    entry={item.content}
                    frontmatter={item.frontmatter}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
