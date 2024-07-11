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
        <h1>{frontmatter.title}</h1>
        <div className="text-slate-400 -mt-2">
          &gt; <em>{frontmatter.summary}</em>
        </div>
        {content}
      </div>
    </Layout>
  );
}
