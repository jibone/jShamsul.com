import type { NextPage } from "next";
import MetaHead from "../components/MetaHead";
import Notification from "../components/Notification";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Aside from "../components/Aside";

const About: NextPage = () => {
  return (
    <>
      <MetaHead title="About - jShamsul.com" />
      <div className="min-h-screen">
        <Notification message="" />

        {/* start main content */}
        <main>
          <div className="container mx-auto px-5">
            <Header size="small" path="/about" />

            <article className="grid grid-cols-3 gap-4">
              <section className="col-span-3">
                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12">
                  About
                </h1>
              </section>

              <HeroImage name="about.jpg" />

              <section className="mb-14 col-span-3 md:col-span-2 md:mb-16">
                <h2 className="text-2xl md:text-3xl">About the author</h2>
                <p className="mt-4">
                  My name is <strong>J.Shamsul Bahri</strong>, around the web I am mostly known with
                  my handle <em>@jibone</em>. I am a husband to a beautiful wife, a father to a
                  adorable daughter, a son to loving parents, and a seeker of benificial knowledge.
                  I am a <strong>software engineer</strong> from{" "}
                  <strong>Kuala Lumpur, Malaysia</strong> currently working and living in{" "}
                  <strong>Singapore</strong>. During my free time, I read books, play video games,
                  build mechnical keyboards, and other random cool stuff.
                </p>
                <h2 className="mt-8 text-2xl md:text-3xl">About the website</h2>
                <p className="mt-4">
                  This website is created using{" "}
                  <a
                    href="https://nextjs.org"
                    className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors"
                  >
                    Next.js
                  </a>
                </p>
              </section>
              <Aside links={["twitter", "github"]} />
            </article>
          </div>
        </main>
        {/* end main content */}
      </div>
    </>
  );
};

export default About;
