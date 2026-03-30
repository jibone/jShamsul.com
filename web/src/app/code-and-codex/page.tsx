import Link from "next/link";
import { EssayList, Layout } from "@/components";
import { generateSiteMetadata } from "@/utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Code & Codex";
  const subtitle = "Essays on code, meaning, and modern myth";
  const titleEncoded = encodeURIComponent(title);
  const subtitleEncoded = encodeURIComponent(subtitle);
  const newsletterImage = encodeURIComponent(`code-and-codex-banner.png`);
  const imagepath = `/api/og?title=${titleEncoded}&subtitle=${subtitleEncoded}&newsletter=${newsletterImage}`;

  return generateSiteMetadata({
    title: title,
    description: subtitle,
    image: imagepath,
    url: "https://jshamsul.com/code-and-codex",
  });
}

export default function CodeCodexPage() {
  return (
    <Layout page="code-codex">
      <div className="prose-custom">
        <h1>Code &amp; Codex</h1>

        <p>
          <em>
            A field manual for understanding power, code,
            <br /> and truth in the digital age.
          </em>
        </p>

        <p>Peace be upon you, fellow digital wanderer.</p>

        <p>We are living inside systems we did not design.</p>

        <p>
          Invisible architectures shape what we see, what we believe, and what
          we become. Algorithms decide what is visible. Platforms decide what is
          true. Power hides behind interfaces.
        </p>

        <p>Most people, they scroll. We observe.</p>

        <p>
          <img src="/imgs/newsletters/code-and-codex-banner.png" />
        </p>

        <p>
          I am a technologist by craft, and a writer by necessity.{" "}
          <strong>Code &amp; Codex</strong> is where these two converge. This is
          not a space for tech trends, framework, or tutorials. This is a field
          manual for understanding the system that shape perceptions, truth, and
          power in the digital age. A companion for moving through them with
          intent.
        </p>

        <p>
          <strong>Code &amp; Codex</strong> functions as a digital grimoire, a
          collection of essays, fragments, and signals. Some entries will be
          clear, some will be cryptic. That is intentional because clarity is
          something you develop, not something handed to you.
        </p>

        <p>
          If you write code not just to build, but to create meaning, to explore
          truth, and to carve your own path within the system, then you are
          exactly who this is for.
        </p>

        <p>
          For teh full philosophy and operational framework behind{" "}
          <strong>Code &amp; Codex</strong>:{" "}
          <Link href="/code-and-codex/manifesto">Read the Manifesto.</Link>
        </p>

        <p>
          If any of this speaks to you, consider subscribing to Code &amp; Codex
          on <a href="https://codeandcodex.substack.com">Substack</a>,{" "}
          <a href="https://paragraph.com/@code_codex">Paragraph</a>, or read it
          on{" "}
          <a href="https://primal.net/p/nprofile1qqsqsgehv75h9hvla3d39gzh87w5karednhcaj6z3jhy5tmtsxmzgjgpwsmcx#reads">
            Nostr
          </a>
          .
        </p>

        <p>Or explore the archive here.</p>

        <EssayList filter="codex" />

        <p>
          <Link href="/">← Back to Home</Link>
        </p>
      </div>
    </Layout>
  );
}
