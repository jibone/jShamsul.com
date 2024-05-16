import { Layout, BlogPostList } from "@/components";
import { BlogCollection } from "@/models";

export default async function Home() {
  const blogposts = await BlogCollection.list();

  return (
    <Layout page="home">
      <div className="prose-custom">
        <h1>Hello Internets.</h1>
        <p>
          My name is <strong>J. Shamsul Bahri</strong>. Around the web you will
          often see me going by the handle{" "}
          <a href="http://twitter.com/jibone" target="_blank">
            @jibone
          </a>
          . <em>Husband</em> to a lovely wife, <em>father</em> to an adorable
          daughter, <em>seeker</em> of baneficial knowledge, and{" "}
          <em>builder</em> of useable software.
        </p>
        <p>
          I am a <strong>Software Engineer</strong> from{" "}
          <em>Kuala Lumpur, Malaysia</em>. Currently I am based on the sunny
          city of <em>Singapore</em>. As a full-stack Software Engineer, I love
          exploring both the frontend and backend of things.
        </p>
        <p>
          In my spare time, I love building Lego sets with my daughter,
          assembling plastic robots figures known as Gunpla, soldering keyboard
          switches customizing Machanical Keyboards, and play games on Nintendo
          Switch.
        </p>
      </div>

      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Writings</h2>
        <BlogPostList posts={blogposts} />
      </div>
    </Layout>
  );
}
