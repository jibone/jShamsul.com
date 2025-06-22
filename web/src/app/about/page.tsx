import { Layout } from "@/components";

export default function About() {
  return (
    <Layout page="about">
      <div className="prose-custom">
        <h1>About the person.</h1>
        <p>
          <em>Peace be upon you, fellow digital traveller.</em>
        </p>

        <p>
          My name is <strong>J. Shamsul</strong>. If we&rsquo;ve crossed paths
          online, you might know me as <strong>Jibone</strong>. If we
          haven&rsquo;t — I&rsquo;ve prepared a <a href="/connect">Connect</a>{" "}
          page that lists the platforms where I&rsquo;m active. I&rsquo;d love
          to connect with fellow <em>cyberspace wanderers.</em>
        </p>

        <p>
          A husband to a lovely wife, a father to an adorable daughter, and a
          son to caring parents. A seeker of beneficial knowledge, a builder of
          software, and a writer aspiring to be. I consider myself a
          <em>technologist-philosopher</em>, a <em>digital storyteller</em>, and
          a <em>cyberspace wanderer</em>.
        </p>

        <p>
          By trade, I&rsquo;m a seasoned full-stack software engineer with over
          15 years of experience. By choice, I&rsquo;m expanding my craft as a
          <em>technologist who tells stories</em>.
        </p>

        <p>
          When I&rsquo;m not writing code, I write prose — sometimes short,
          sometimes long — ranging from personal anecdotes in tech to
          philosophical musings on how technology shapes culture, society, and
          the individual self.
        </p>

        <p>
          This website is my little outpost in the vastness of cyberspace — a
          home to gather all my writing in one place. Most of it was first
          published in my newsletter,{" "}
          <a href="/code-and-codex">Code &amp; Codex</a>.
        </p>

        <h2>About the website.</h2>

        <p>
          This site is built with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
          , styled using{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            TailwindCSS
          </a>
          , and powered by{" "}
          <a href="https://mdxjs.com/" target="_blank">
            MDX
          </a>{" "}
          for content. If you&rsquo;re curious, feel free to snoop around the{" "}
          <a href="https://github.com/jibone/jShamsul.com" target="_blank">
            GitHub repo
          </a>{" "}
          to see how things are wired up.
        </p>

        <p>
          The fonts used here are from the iA Writer font family — a combination
          of Quattro, Duo, and Mono. Check out iA&rsquo;s{" "}
          <a href="https://github.com/iaolo/iA-Fonts" target="_blank">
            GitHub repo
          </a>{" "}
          and their{" "}
          <a
            href="https://ia.net/topics/a-typographic-christmas"
            target="_blank"
          >
            write-up
          </a>{" "}
          on the design philosophy behind these fonts — it&rsquo;s a great read.
        </p>
      </div>
    </Layout>
  );
}
