import { BookCollection } from "@/models";
import Link from "next/link";
import { generateSiteMetadata, MDX } from "@/utils";
import { Layout } from "@/components";
import "@/styles/highlightjs/tokyo-night-dark.css";
import BookBox from "@/components/BookBox";
import ZapButton from "@/components/ZapButton";
import KofiButton from "@/components/KofiButton";
import { Metadata } from "next";

const path = `${process.cwd()}/contents/essays`;

async function getPageContents(slug: string) {
  const filepath = `${path}/${slug}.mdx`;

  const { frontmatter, MDXContent } = await MDX.process({ filepath });

  return { MDXContent, frontmatter };
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const { frontmatter } = await getPageContents(slug);

  const { ogTitle, ogSubtitle, coverImg } = frontmatter;
  const titleEncode = encodeURIComponent(ogTitle);
  const subtitleEncode = encodeURIComponent(ogSubtitle);
  let imagepath = `/api/og?title=${titleEncode}&subtitle=${subtitleEncode}`;

  if (coverImg !== undefined) {
    const coverImgEncode = encodeURIComponent(coverImg);
    imagepath = imagepath + `&cover=${coverImgEncode}`;
  }

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

        {frontmatter.codecodex === undefined ? (
          " "
        ) : (
          <div className="mb-4 space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg">
            <span>
              Canonical archive / Published on{" "}
              <a href="https://codeandcodex.substack.com/">Substack</a> /
              Mirrored on-chain via{" "}
              <a href="https://paragraph.com/@code_codex">Paragraph</a> /
              Relayed across{" "}
              <a href="https://primal.net/p/nprofile1qqsqsgehv75h9hvla3d39gzh87w5karednhcaj6z3jhy5tmtsxmzgjgpwsmcx#reads">
                Nostr
              </a>
            </span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <KofiButton />
          </div>

          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <ZapButton noteId={frontmatter.nostrNoteId} />
          </div>
        </div>

        <div className="mt-10">
          {frontmatter.codecodex === undefined ? (
            <Link href="/">&larr; back</Link>
          ) : (
            <Link href="/code-and-codex">&larr; back to archive</Link>
          )}
        </div>
      </div>
    </Layout>
  );
}
