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
        <p>Find me in the wild:</p>
        <ul>
          <li>
            Tweeting away:{" "}
            <a href="http://x.com/jibone" target="_blank">
              @jibone
            </a>
          </li>
          <li>
            Sharing codes:{" "}
            <a href="http://github.com/jibone" target="_blank">
              github.com/jibone
            </a>
          </li>
          <li>
            On-chain Writings:{" "}
            <a href="https://mirror.xyz/jibone.eth" target="_blank">
              mirror.xyz/jibone.eth
            </a>
          </li>
          <li>
            Buy me coffee:{" "}
            <a href="http://ko-fi.com/jibone" target="_blank">
              ko-fi.com/jibone
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Writings</h2>
        <BlogPostList posts={blogposts} />
      </div>

      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Building</h2>
        <div className="mb-10 bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
          <div>
            <a href="https://cometo.my" target="_blank">
              ComeTo.my
            </a>
          </div>
          <div>
            Discover interesting places and hidden gems around your city.
          </div>
        </div>
        <div className="mb-10 bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
          <div>
            <a href="https://web3l.ist" target="_blank">
              Web3l.ist
            </a>
          </div>
          <div>
            A curated directory of Web3 resources, indexing on projects, news,
            podcast and other conversations in this space.
          </div>
        </div>
        <div className="mb-10 bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
          <div>
            <a href="https://taskl.ist" target="_blank">
              Taskl.ist
            </a>
          </div>
          <div>
            Building yet another To Do List app. This one is personal, private,
            and minimalistic.
          </div>
        </div>
      </div>

      <div className="pt-1 prose-custom">
        <h2 className="font-medium">Experimenting</h2>
        <div className="bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
          <div>
            <a href="https://web3l.ist">ai.jshamsul.com</a>
          </div>
          <div>Experimental AI-based tooling, just for fun.</div>
        </div>
        <div className="mt-8 bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
          <div>
            <a href="https://web3l.ist">web3.jshamsul.com</a>
          </div>
          <div>Experimental Web3 apps, just for fun.</div>
        </div>
      </div>
    </Layout>
  );
}
