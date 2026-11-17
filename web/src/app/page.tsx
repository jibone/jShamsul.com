import Link from "next/link";
import { Layout, EssayList } from "@/components";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <Layout page="home">
      <section className="hero-block" aria-labelledby="intro-title">
        <div className="hero-meta"><span>INDEPENDENT NOTES / KUALA LUMPUR ↔ SINGAPORE</span><ThemeToggle /></div>
        <div className="ascii-mark" aria-hidden="true">{`  .-=========-.\n /  WRITE /   \\\n|  THINK /     |\n \\ BUILD /   /\n  '-========-'`}</div>
        <p className="eyebrow">PERSONAL WEBSITE OF J. SHAMSUL · EST. 2012</p>
        <h1 id="intro-title">Making sense<br />of <span>the noise.</span></h1>
        <p className="hero-copy">I&apos;m J. Shamsul — software builder, lifelong student, and occasional writer. I make things for the web, then try to understand what they mean.</p>
        <div className="hero-signoff"><span>HUSBAND · FATHER · SON</span><span>↓ SCROLL SLOWLY</span></div>
      </section>

      <section className="writing-section" aria-labelledby="writing-title">
        <div className="section-heading"><p className="eyebrow">01 / THE READING ROOM</p><h2 id="writing-title">Recent writing<span className="period">.</span></h2></div>
        <p className="section-intro">Long thoughts for a short-attention world. Best read with a little time and no rush.</p>
        <div className="essay-list"><EssayList filter="codex" limit={4} /></div>
        <Link className="archive-link" href="/code-and-codex">ENTER THE ARCHIVE <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="note-strip"><span className="note-ascii" aria-hidden="true">[ * ]</span><p>When I&apos;m not writing code, I write prose.<br /><span>Usually about people, technology, and the space between.</span></p></section>
    </Layout>
  );
}
