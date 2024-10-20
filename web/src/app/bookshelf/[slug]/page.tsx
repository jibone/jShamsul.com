import type { BookFrontmatter } from "@/models/BookCollection";
import { MDX, generateSiteMetadata } from "@/utils";
import { Layout } from "@/components";

const path = `${process.cwd()}/contents/books`;

async function getPageContents(slug: string) {
  const filepath = `${path}/${slug}.mdx`;

  return await MDX.process<BookFrontmatter>({ filepath });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontmatter } = await getPageContents(slug);

  const { title, subtitle } = frontmatter;
  const titleEncode = encodeURIComponent(title);
  const subtitleEncode = encodeURIComponent(subtitle);
  const imagepath = `/api/og?title=${titleEncode}&subtitle=${subtitleEncode}`;

  return generateSiteMetadata({
    title: frontmatter.title,
    description: frontmatter.subtitle,
    image: imagepath,
  });
}

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { content, frontmatter } = await getPageContents(slug);

  return (
    <Layout page="bookshelf">
      <div className="prose-custom">
        <div className="mb-4">
          <a href="/bookshelf">&larr; back to bookshelf</a>
        </div>

        <h1>{frontmatter.title}</h1>

        {frontmatter.subtitle === "" ? (
          ""
        ) : (
          <div className="text-slate-600 font-light -mt-4">
            &gt; <em>{frontmatter.subtitle}</em>
          </div>
        )}

        <div className="text-slate-600 font-light">
          By: {frontmatter.author}
        </div>

        {content}

        <div className="mb-4">
          <a href="/bookshelf">&larr; back to bookshelf</a>
        </div>
      </div>
    </Layout>
  );
}
