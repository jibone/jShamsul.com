import "../../prism.css";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { generateSiteMetadata } from "@/utils";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allBlogs.find(
    (p) => p._raw.flattenedPath === `blog/${params.slug}`,
  ) as Blog;

  const ogBanner = `/img/${post._raw.flattenedPath}/og_banner.png`;

  return generateSiteMetadata({
    title: post.title,
    description: post.summary,
    image: ogBanner,
  });
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = allBlogs.find(
    (p) => p._raw.flattenedPath === `blog/${params.slug}`,
  ) as Blog;

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto max-w-3xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-lg text-grey-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold leading-loose md:text-6xl">
          {post.title}
        </h1>
      </div>
      <div className="prose-lg">
        <MDXContent />
      </div>
    </article>
  );
}
