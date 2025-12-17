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
          <em>Essays on code, meaning, and modern myth.</em>
        </p>

        <p>
          <strong>Code &amp; Codex</strong> is a newsletter I started in early
          2025. It’s a cyberpunk-inspired project that explores the liminal
          space between software engineering, encrypted knowledge, and the
          aesthetics of digital subculture.
        </p>

        <p>
          <img src="/imgs/newsletters/code-and-codex-banner.png" />
        </p>

        <p>
          I consider myself a seasoned technologist with a taste for
          storytelling. <strong>Code &amp; Codex</strong> is where I weave
          together reflections on code, language, meaning, and permanence in the
          ever-shifting matrix of modern tech.
        </p>

        <p>
          This newsletter isn’t a place for tutorials or trends.{" "}
          <strong>Code &amp; Codex</strong> operates more like a digital
          grimoire: a dispatch of philosophical dev musings, underground
          signals, and long-form essays that examine the act of creation in code
          as both an engineering discipline and an artistic pursuit.
        </p>

        <p>
          By bringing together themes like digital permanence, the search for
          truth, and the hacker-as-alchemist, I hope{" "}
          <strong>Code &amp; Codex</strong> will resonate with readers who see
          technology not just as a tool, but as a form of intellectual and
          existential expression.
        </p>

        <p>
          Through essays, commentary, and the occasional cryptic dispatch, I
          want <strong>Code &amp; Codex</strong> to speak to those who write
          code not just to build, but to create meaning.
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
