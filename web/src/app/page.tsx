import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";

// [TODO] Move this to Component...
function BlogPostCard(post: Blog) {
  const { date, title, slug, summary } = post;

  return (
    <li className="py-2">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500">
              <time dateTime={date}>
                {format(parseISO(date), "LLLL d, yyyy")}
              </time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900">
                    {title}
                  </Link>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-500">{summary}</div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

const MAX_DISPLAY = 10;

export default function Home() {
  // sort post based on date
  const posts = allBlogs.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello Internets.
          </h1>
          <p className="text-lg leading-7">
            My name is <strong>J. Shamsul Bahri</strong>. Around the web you
            will often see me going by the handle{" "}
            <em>
              <a
                href="https://x.com/jibone"
                target="_blank"
                aria-label="@jibone"
              >
                @jibone
              </a>
            </em>
            . Husband to a lovely wife, father to an adorable daughter, seeker
            of baneficial knowledge, and builder of useable software.
          </p>
          <p className="text-lg leading-7">
            I am a <em>Software Engineer</em> from Kuala Lumpur, Malaysia.
            Currently I am based on the sunny city of Singapore. As a full-stack
            engineer, I love exploring both the frontend and backend of things.
          </p>
          <p className="text-lg leading-7">
            In my spare time, I love building <em>Lego</em> sets with my
            daughter, assembling plastic robots figures known as <em>Gunpla</em>
            , soldering keyboard switches and customizing{" "}
            <em>Machanical Keyboards</em>, and play games on{" "}
            <em>Nintendo Switch</em>.
          </p>
        </div>

        <ul className="divide-y divide-gray-200">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post: Blog, idx: number) => {
            return <BlogPostCard key={idx} {...post} />;
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
