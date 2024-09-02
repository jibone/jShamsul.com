import type { BlogFrontmatter } from "@/models";
import { MDX, generateSiteMetadata } from "@/utils";
import { Layout } from "@/components";
import "@/styles/highlightjs/tokyo-night-dark.css";

const path = `${process.cwd()}/contents/blog`;

async function getPageContents(slug: string) {
  const filepath = `${path}/${slug}.mdx`;

  return await MDX.process<BlogFrontmatter>({ filepath });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontmatter } = await getPageContents(slug);

  const { ogTitle, ogSubtitle } = frontmatter;
  const titleEncode = encodeURIComponent(ogTitle);
  const subtitleEncode = encodeURIComponent(ogSubtitle);
  const imagepath = `/api/og?title=${titleEncode}&subtitle=${subtitleEncode}`;

  return generateSiteMetadata({
    title: frontmatter.title,
    description: frontmatter.summary,
    image: imagepath,
  });
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { content, frontmatter } = await getPageContents(slug);

  return (
    <Layout page="blogpost">
      <div className="prose-custom">
        <div className="mb-4">
          <a href="/">&larr; back</a>
        </div>
        <div className="mb-2">{frontmatter.date}</div>
        <h1>{frontmatter.title}</h1>
        <div className="text-slate-600 font-light -mt-4">
          &gt; <em>{frontmatter.summary}</em>
        </div>
        {content}

        <div className="mt-10">
          <a href="/">&larr; back</a>
        </div>
        <div className="h-8">
          <div className="-mb-8 mt-14">Like what you read? </div>
          <a
            href="https://ko-fi.com/N4N112RRIJ"
            target="_blank"
            className="mt-0 pt-0"
          >
            <img
              className="h-8 mt-0 pt-0"
              src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
