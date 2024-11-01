import { Layout } from "@/components";

export default function About() {
  return (
    <Layout page="about">
      <div className="prose-custom">
        <h1>About the person.</h1>
        <p>
          My name is <strong>J. Shamsul Bahri</strong>. Around the web, I often
          go by the handle{" "}
          <a href="https://twitter.com/jibone" target="_blank">
            @jibone
          </a>
          . A husband to a lovely wife, father to an adorable daughter, seeker
          of beneficial knowledge, and a builder of software. Born in Malaysia,
          currently residing in Singapore.
        </p>

        <p>
          I am a <strong>full-stack Software Engineer</strong> with over 15
          years of professional experience building scalable software systems.
          The recent 9 years I was with{" "}
          <a href="https://grab.com" target="_blank">
            Grab
          </a>
          , the South East Asian ‘super-app’ offering logistical services,
          ride-hailing, and financial services to the region.
        </p>

        <p>
          I started my career in software engineering after finishing my studies
          at <strong>University Tenaga National</strong>, working at a
          local-based defence contractor specialising in developing, supplying,
          and maintaining IT systems for the Malaysian armed forces.
          Subsequently, I worked with a few local start-ups before I joined{" "}
          <strong>Grab</strong> — which back then was a little ‘start-up’ known
          as <strong>MyTeksi</strong>. I often tell people that I used to work
          at tech start-ups in the valley, the Klang Valley that is.
        </p>

        <p>
          I relocated to <strong>Singapore</strong> as Grab relocated its
          engineering office back in 2015, and have been here since.
        </p>

        <p>
          This website is my personal space online. Here is where I share my
          writings in the attempt to make sense of things, and for posterity.
        </p>

        <blockquote>
          <p>
            Orang boleh pandai setinggi langit, tapi selama ia tidak menulis, ia
            akan hilang di dalam masyarakat dan dari sejarah. Menulis adalah
            berkerja untuk keabadian.
          </p>
          — Pramoedya Ananta Toer
        </blockquote>

        <p>
          A man can be brilliant as high as the sky, but as long as he does not
          write, he will disappear from society and history. To write is to work
          for posterity.
        </p>

        <h2>About the website.</h2>

        <p>
          This website is build using{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            TailwindCSS
          </a>{" "}
          for the stylings. I use{" "}
          <a href="https://mdxjs.com/" target="_blank">
            MDX
          </a>{" "}
          for the content. You can snoop around this{" "}
          <a href="https://github.com/jibone/jShamsul.com" target="_blank">
            GitHub repo
          </a>{" "}
          if you want to see how things are wired up.{" "}
        </p>

        <p>
          The fonts used for this website are the iA Writer font family the
          combination for all three, the Quattro, Duo, and Mono. Check out their{" "}
          <a href="https://github.com/iaolo/iA-Fonts" target="_blank">
            GitHub repo
          </a>
          , and their{" "}
          <a
            href="https://ia.net/topics/a-typographic-christmas"
            target="_blank"
          >
            write up
          </a>{" "}
          about these fonts.
        </p>
      </div>
    </Layout>
  );
}
