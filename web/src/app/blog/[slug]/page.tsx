import "../../prism.css";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/utils";
import BlogModel, { BlogFrontmatter } from "@/models/blogpostModel";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

async function getPageContent(
  pageName: string,
): Promise<CompileMDXResult<BlogFrontmatter> | undefined> {
  const blogModel = new BlogModel();
  const pageContent = await blogModel.get(pageName);

  return pageContent;
}

async function getPageMetadata(
  pageName: string,
): Promise<BlogFrontmatter | undefined> {
  const contents = await getPageContent(pageName);
  return contents?.frontmatter;
}

export async function generateStaticParams() {
  const blogModel = new BlogModel();
  const list = blogModel.list();
  return list.map((item) => ({
    slug: item,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const frontmatter = await getPageMetadata(params.slug);

  return generateSiteMetadata({
    title: frontmatter?.title || "",
    description: frontmatter?.summary,
  });
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const pageContent = await getPageContent(params.slug);
  if (!pageContent) notFound();

  return (
    <article className="mx-auto max-w-3xl py-8">
      <div className="mb-8 text-center">
        <time
          dateTime={pageContent.frontmatter.date}
          className="mb-1 text-lg text-grey-600"
        >
          {format(parseISO(pageContent.frontmatter.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold leading-loose md:text-6xl">
          {pageContent.frontmatter.title}
        </h1>
      </div>
      <div className="prose-lg">{pageContent.content}</div>
    </article>
  );
}
