import "../../prism.css";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import { siteMetadata } from "@/data/siteMetadata";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

function getPostFromSlug(slug: string) {
  const post = allBlogs.find((p) => p._raw.flattenedPath === `blog/${slug}`);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return post;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostFromSlug(params.slug);
  return { title: `${post.title} | ${siteMetadata.title}` };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPostFromSlug(params.slug);

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
      <div className="prose lg:prose-lg">
        <MDXContent />
      </div>
      <div className="mt-6">
        <Link href="/" className="text-primary-500 hover:text-primary-900">
          &larr; Back to Home
        </Link>
      </div>
    </article>
  );
}
