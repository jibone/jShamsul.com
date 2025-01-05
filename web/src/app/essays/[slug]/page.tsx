import { BookCollection } from "@/models";
import Link from "next/link";
import { generateSiteMetadata, MDX } from "@/utils";
import { Layout } from "@/components";
import "@/styles/highlightjs/tokyo-night-dark.css";
import BookBox from "@/components/BookBox";

const path = `${process.cwd()}/contents/essays`;

async function getPageContents(slug: string) {
  const filepath = `${path}/${slug}.mdx`;

  const { frontmatter, MDXContent } = await MDX.process({ filepath });

  return { MDXContent, frontmatter };
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
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

export default async function EssayPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const { MDXContent, frontmatter } = await getPageContents(slug);

  return (
    <Layout page="essay">
      <div className="prose-custom">
        <div className="mb-4">
          {frontmatter.mirror === undefined ? (
            " "
          ) : (
            <a
              href={frontmatter.mirror}
              className="!py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
              target="_blank"
            >
              Mint this on Mirror.xyz
            </a>
          )}
        </div>

        <div className="mb-2">{frontmatter.date}</div>

        <h1>{frontmatter.title}</h1>

        <div className="text-slate-600 font-light -mt-4">
          &gt; <em>{frontmatter.summary}</em>
        </div>

        <MDXContent />

        {frontmatter.bookshelf === undefined ? (
          ""
        ) : (
          <div className="mb-4">
            {frontmatter.bookshelf.map(async (b: string) => {
              const book = await BookCollection.getFrontmatter(b);
              return (
                <div key={book.url}>
                  <BookBox
                    url={`/bookshelf/${b}`}
                    cover={book.cover_img}
                    title={book.title}
                    subtitle={book.subtitle}
                    author={book.author}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="mb-4">
          {frontmatter.mirror === undefined ? (
            " "
          ) : (
            <a
              href={frontmatter.mirror}
              className="!py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
              target="_blank"
            >
              Mint this on Mirror.xyz
            </a>
          )}
        </div>

        <div className="mt-10">
          <Link href="/">&larr; back</Link>
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
