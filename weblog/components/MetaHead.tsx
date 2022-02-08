import Head from "next/head";

interface MetaHeadProps {
  title?: string | undefined;
  description?: string | undefined;
  twitter_card?: "summary" | "summary_large_image" | "app" | "player";
  twitter_site?: string | undefined;
  twitter_creator?: string | undefined;
  url?: string | undefined;
  image?: string | undefined;
}

const defaultValue = {
  title: "JShamsul.com",
  description:
    "Definitive online presence for J.Shamsul, a software engineer from Kuala Lumpur, Malaysia. Currently living and working in Singapore.",
  card: "summary",
  creator: "@jibone",
  url: "https://jshamsul.com",
  image: "/favicon/meta-image.png",
};

const MetaHead: React.FC<MetaHeadProps> = (props) => {
  // set default value.
  const title = props.title === undefined ? defaultValue.title : props.title;
  const description =
    props.description === undefined ? defaultValue.description : props.description;
  const twitter_card = props.twitter_card === undefined ? defaultValue.card : props.twitter_card;
  const twitter_creator =
    props.twitter_creator === undefined ? defaultValue.creator : props.twitter_creator;
  const url = props.url === undefined ? defaultValue.url : props.url;
  const image = props.image === undefined ? defaultValue.image : props.url;

  return (
    <Head>
      <title>{title}</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <meta name="twitter:card" content={twitter_card} />
      {props.twitter_site && <meta name="twitter:site" content={props.twitter_site} />}
      <meta name="twitter:creator" content={twitter_creator} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="msapplication-square70x70logo" content="/favicon/mstile70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicon/mstile150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicon/mstile310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicon/mstile310x310.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="application-name" content="jShamsul." />
    </Head>
  );
};

export default MetaHead;
