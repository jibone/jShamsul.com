import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import HeroImage from '../components/hero-image';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About - jShamsul. @jibone</title>
        </Head>
        <Container>
          <Header size="small" path="/about" />

          <article>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:test-left">
              About
            </h1>

            <HeroImage name="about.jpg" />

            <div className="max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl tracking-tight leading-tight mb-6">The person</h2>
              <p className="mb-4">J. Shamsul Bahri believes that talking in third-person is necessary when writing an about page. He is a software engineer from Kuala Lumpur, Malaysia currently living and working in Singapore. A husband to a beautiful wife and a father to an adorable daughter</p>
              <p className="mb-4">He does not believe in "eat, sleep, code and repeat." While he is passionate about writing code and equally passionate about both eating and sleeping, that is not all that he does. He plays video games, read comics, drinks coffee, watches movies, listens to music, builds mechanical keyboards, and other random super cool stuff.</p>
              <h2 className="text-2xl tracking-tight leading-tight mb-6 mt-12">The website</h2>
              <p className="mb-4">The purpose of this site is to serve as a definitive online presence for J. Shamsul.</p>
              <p className="mb-4">
                This site is created using a static site generator,{' '}
                <a href="https://nextjs.com" className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors">Next.js</a>
                . Codes are on{' '}
                <a href="https://github.com" className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors">Github</a>
                .
              </p>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
}
