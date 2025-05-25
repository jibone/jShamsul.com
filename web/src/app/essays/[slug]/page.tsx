import { BookCollection } from "@/models";
import Link from "next/link";
import { generateSiteMetadata, MDX } from "@/utils";
import { Layout } from "@/components";
import "@/styles/highlightjs/tokyo-night-dark.css";
import BookBox from "@/components/BookBox";
import ZapButton from "@/components/ZapButton";

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

          {frontmatter.codecodex === undefined ? (
            " "
          ) : (
            <div className="space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
              <div>
                <div>This was first posted on</div>
                <div>
                  <strong>Code &amp; Codex Newsletter</strong>.
                </div>
              </div>
              <a className="!ml-0" href={frontmatter.codecodex}>
                Subscribe &rarr;
              </a>
            </div>
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

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <a href="https://ko-fi.com/jibone" target="_blank">
              ☕️ Buy me ko-fi ?
            </a>
          </div>

          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <ZapButton />
          </div>
        </div>

        <div className="mt-10">
          <Link href="/">&larr; back</Link>
        </div>

        {frontmatter.codecodex === undefined ? (
          " "
        ) : (
          <div className="mt-12">
            Subscribe to have <strong>Code &amp; Codex</strong> delivered to
            your inbox.
            <div className="space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
              <iframe
                className="w-full"
                src="https://codeandcodex.substack.com/embed"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
