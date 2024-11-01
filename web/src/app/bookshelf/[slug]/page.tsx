import type { BookFrontmatter } from "@/models/BookCollection";
import Link from "next/link";
import { MDX, generateSiteMetadata } from "@/utils";
import { Layout } from "@/components";

const path = `${process.cwd()}/contents/books`;

async function getPageContents(slug: string) {
  const filepath = `${path}/${slug}.mdx`;

  return await MDX.process({ filepath });
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
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

export default async function BookPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const { MDXContent, frontmatter } = await getPageContents(slug);

  return (
    <Layout page="bookshelf">
      <div className="prose-custom">
        <div className="mb-4">
          <Link href="/bookshelf">&larr; back to bookshelf</Link>
        </div>

        <div className="flex space-x-4">
          <div className="w-32">
            <img
              src={frontmatter.cover_img}
              alt={`Book cover for ${frontmatter.title}`}
              className="!my-0 border border-white rounded-lg drop-shadow-lg"
            />
          </div>
          <div className="flex-1">
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
          </div>
        </div>

        <MDXContent />

        <div className="mb-4">
          <Link href="/bookshelf">&larr; back to bookshelf</Link>
        </div>
      </div>
    </Layout>
  );
}
