import Link from "next/link";

export type PostProps = {
  date: string;
  url: string;
  title: string;
  mirror?: string;
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
          <div className="flex-1">
            <Link href={post.url}>{post.title}</Link>{" "}
            {post.mirror === undefined ? (
              " "
            ) : (
              <a
                href={post.mirror}
                className="!py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
                target="_blank"
              >
                mint-able
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
