import { Layout, EssayList } from "@/components";

export default async function Home() {
  return (
    <Layout page="home">
      <div className="prose-custom">
        <h1>
          <em>Peace be upon you, fellow digital traveler.</em>
        </h1>

        <p>
          I&rsquo;m J. Shamsul — or @jibone, if you&rsquo;ve seen me online.
        </p>

        <p>A husband, a father, and a son.</p>

        <p>A knowledge seeker, a software builder, and an aspiring writer.</p>

        <p>
          A technologist philosopher, a digital storyteller, and a cyberspace
          wanderer.
        </p>

        <p>
          A seasoned full-stack software engineer from Kuala Lumpur, now based
          in sunny Singapore.
        </p>

        <p>When I’m not writing code, I write prose.</p>
      </div>

      <div className="pt-8 prose-custom">
        <h2 className="font-medium">Latest Code &amp; Codex dispatches:</h2>
        <EssayList filter="codex" limit={10} />

        <p className="pt-4">
          <a href="/code-and-codex">Read more essays →</a>
        </p>
      </div>

      <div className="pt-8 prose-custom">
        <h2 className="font-medium">Other fleeting notes:</h2>
        <EssayList filter="others" />
      </div>

      {/* commenting this out first
      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Newsletters</h2>
        <LinkBox
          url="https://codeandcodex.substack.com"
          label="Code & Codex"
          text="Essays on code, meaning, and modern myth."
        />
      </div>

      <div className="pt-1 prose-custom">
        <h2 className="font-medium">Experimenting</h2>
        <LinkBox
          url="https://ai.jshamsul.com"
          label="ai.jshamsul.com"
          text="Experimental AI-based tooling, just for fun."
        />
      </div>
      */}
    </Layout>
  );
}
