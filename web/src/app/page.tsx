import { Layout, EssayList } from "@/components";
import LinkBox from "@/components/LinkBox";

export default async function Home() {
  return (
    <Layout page="home">
      <div className="prose-custom">
        <h1>Peace be upon you, fellow digital traveler.</h1>

        <p>
          I am <strong>J. Shamsul</strong>, but you might know me as{" "}
          <strong>@jibone</strong>.
        </p>

        <p>
          A husband, father, knowledge seeker, software builder, and aspiring
          writer.
        </p>

        <p>
          I am a <strong>full-stack Software Engineer</strong> from Kuala
          Lumpur, Malaysia. Currently, I am based in the sunny city of
          Singapore.
        </p>

        <p>
          When not writing codes, I write prose. I have two active newsletters —
          <a href="https://codeandcodex.substack.com" target="_blank">
            Code &amp; Codex
          </a>
          , and{" "}
          <a href="https://jibone.substack.com" target="_blank">
            Jibone’s Fleeting Notes
          </a>
          .
        </p>
      </div>

      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Writings</h2>
        <EssayList />
      </div>

      <div className="pt-12 prose-custom">
        <h2 className="font-medium">Newsletters</h2>
        <LinkBox
          url="https://codeandcodex.substack.com"
          label="Code & Codex"
          text="where software, cyberpunk aesthetics, and encrypted knowledge intersect."
        />
        <LinkBox
          url="https://jibone.substack.com"
          label="Jibone's Fleeting Notes"
          text="a collection of musings, reflections, and my ongoing journey as a writer."
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
    </Layout>
  );
}
