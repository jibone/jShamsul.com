import Link from "next/link";

export type PostProps = {
  date: string;
  url: string;
  title: string;
};

export default function BlogPostList({ posts }: { posts: PostProps[] }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.url} className="mb-5 md:flex md:gap-2">
          <div className="font-iaWriterMono text-slate-400 flex-none w-fit">
            {post.date}
          </div>
          <div className="hidden md:block flex-none w-3">-</div>
          <Link href={post.url} className="flex-1">
            {post.title}
          </Link>
        </div>
      ))}
    </>
  );
}
