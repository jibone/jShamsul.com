import Link from "next/link";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { PalestineLink } from "@/components/PalestineLink";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import PageModel, { PageFrontmatter } from "@/models/pageModel";
import BlogModel, { BlogFrontmatter } from "@/models/blogpostModel";

// [TODO] Move this to Component...
function BlogPostCard(post: BlogFrontmatter) {
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
            <div className="flex text-base font-medium leading-6 -ml-2">
              <PalestineLink
                href={`/blog/${slug}`}
                aria-label={`Read "${title}"`}
                textLabel="Read more →"
              />
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

const MAX_DISPLAY = 10;

async function getPageContent(): Promise<
  CompileMDXResult<PageFrontmatter> | undefined
> {
  const pageName = "home";
  const pageModel = new PageModel();
  const pageContent = await pageModel.get(pageName);

  return pageContent;
}

async function getBlogPostList(): Promise<BlogFrontmatter[]> {
  const blogModel = new BlogModel();
  const blogPostList = blogModel.list();

  let max = MAX_DISPLAY;
  if (blogPostList.length < MAX_DISPLAY) {
    max = blogPostList.length;
  }

  let blogPostListOutput: BlogFrontmatter[] = [];
  for (let i = 0; i < max; i++) {
    const post = await blogModel.get(blogPostList[i]);
    if (post?.frontmatter !== undefined) {
      blogPostListOutput.push({
        ...post?.frontmatter,
        slug: blogPostList[i],
      });
    }
  }

  return blogPostListOutput;
}

export default async function Home() {
  const pageContent = await getPageContent();
  if (!pageContent) notFound();

  const blogPostList = await getBlogPostList();

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello Internets.
          </h1>
          <div className="prose-lg">{pageContent.content}</div>
        </div>

        <ul className="divide-y divide-gray-200 py-3">
          {blogPostList.map((post: BlogFrontmatter, idx: number) => {
            return <BlogPostCard key={idx} {...post} />;
          })}
        </ul>
      </div>
      {blogPostList.length > MAX_DISPLAY && (
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
