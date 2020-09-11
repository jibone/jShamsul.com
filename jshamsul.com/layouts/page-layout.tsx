import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";
import HeroImage from "../components/hero-image";

const Layouts = (frontMatter) => {
  return ({ children: content }) => {
    return (
      <>
        <Layout>
          <Head>
            <title>{frontMatter.title} - jShamsul. @jibone</title>
          </Head>
          <Container>
            <Header size="small" path="/about" />

            <article>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:test-left">
                {frontMatter.title}
              </h1>

              <HeroImage name={frontMatter.image} />

              <div className="max-w-2xl mx-auto mb-16">
                {content}
              </div>
            </article>
          </Container>
        </Layout>
      </>
    );
  };
};

export default Layouts;
