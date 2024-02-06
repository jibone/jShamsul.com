import type { Metadata } from "next";
import ChangelogModel from "@/models/changelogModel";
import { ChangelogItems } from "@/components/Changelog";
import PageModel, { PageFrontmatter } from "@/models/pageModel";
import { generateSiteMetadata } from "@/utils";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

async function getPageContent(): Promise<
  CompileMDXResult<PageFrontmatter> | undefined
> {
  const pageName = "changelog";
  const pageModel = new PageModel();
  const pageContent = await pageModel.get(pageName);

  return pageContent;
}

async function getPageMetadata(): Promise<PageFrontmatter | undefined> {
  const contents = await getPageContent();
  return contents?.frontmatter;
}

export async function generateMetadata(): Promise<Metadata> {
  const pageMetadata = await getPageMetadata();
  if (!pageMetadata) notFound();

  return generateSiteMetadata({
    title: pageMetadata.title,
    description: pageMetadata.ogSubtitle,
  });
}

export default async function ChangeLog() {
  const changelogModel = new ChangelogModel();
  const changelogFileList = changelogModel.list();
  const changelogs = [];

  for (let i = 0; i < changelogFileList.length; i++) {
    const compiled = await changelogModel.get(changelogFileList[i]);
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
