import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import HeroImage from "../components/hero-image";
import Aside from "../components/aside";

const Index: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>jShamsul. @jibone </title>
        </Head>
        <Container>
          <Header size="large" path="/" />

          <article className="grid grid-cols-3  gap-4">
            <HeroImage name="index.jpg" />

            <section className="col-span-3">
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Hello Internets.
              </h1>
              <h2 className="text-2xl italic underline md:text-3xl">
                May peace be upon you.
              </h2>
            </section>

            <section className="mb-14 col-span-3 md:col-span-2 md:mb-16">
              <p className="mt-4">
                My name is <strong>J. Shamsul Bahri</strong>. Around the web, I
                often go by the handle <em>@jibone</em>. Husband to a lovely
                wife, father to an adorable daughter, and a seeker of knowledge.
              </p>

              <p className="mt-4">
                I am a <strong>Software Engineer</strong> from Kuala Lumpur,
                Malaysia currently based in Singapore, where I work with a
                company that is{" "}
                <strong>Driving South East Asian Forward</strong> by providing{" "}
                <em className="underline">ride hailing</em>,{" "}
                <em className="underline">ride sharing</em>,{" "}
                <em className="underline">logistics</em>,{" "}
                <em className="underline">cashless payment</em> and other
                platform services, empowering{" "}
                <em className="underline">sharing</em>,{" "}
                <em className="underline">collaborative</em> and{" "}
                <em className="underline">gig based economy</em> to the masses,
                all in an <em className="underline">everyday super app</em>.
              </p>

              <p className="mt-4">
                In my spare time, I love building plastic robot figures knows as{" "}
                <em className="underline">Gunpla</em>, assemble and solder
                switches to build custom{" "}
                <em className="underline">Mechanical Keyboards</em> and play
                video games, mostly on the{" "}
                <em className="underline">Nintendo Switch</em>.
              </p>
            </section>

            <Aside links={["twitter", "github", "grab"]} />
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
