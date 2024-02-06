import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateSiteMetadata } from "@/utils";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import PageModel, { PageFrontmatter } from "@/models/pageModel";

async function getPageContent(): Promise<
  CompileMDXResult<PageFrontmatter> | undefined
> {
  const pageName = "contact";
  const pageModel = new PageModel();
  const pageContent = await pageModel.get(pageName);

  return pageContent;
}

async function getPageMetadata(): Promise<PageFrontmatter | undefined> {
  const contents = await getPageContent();
  return contents?.frontmatter;
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const pageMetadata = await getPageMetadata();
  if (!pageMetadata) notFound();

  return generateSiteMetadata({
    title: pageMetadata.title,
    description: pageMetadata.ogSubtitle,
  });
}

export default async function Contact() {
  const pageContent = await getPageContent();
  if (!pageContent) notFound();

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact.
          </h1>
          <div className="prose-lg">{pageContent.content}</div>
        </div>
      </div>
    </>
  );
}
