import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <meta
        name="description"
        content="Definitive online presence for J.Shamsul, software engineer from Kuala Lumpur, Malaysia. Currently living and working in Singapore."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jshamsul.com/" />
      <meta property="og:title" content="jShamsul.com" />
      <meta property="og:description" content="Definitive online presence for J.Shamsul, software engineer from Kuala Lumpur, Malaysia. Currently living and working in Singapore." />
      <meta property="og:image" content="/favicon/meta-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jshamsul.com/" />
      <meta property="twitter:title" content="jShamsul.com" />
      <meta property="twitter:description" content="Definitive online presence for J.Shamsul, software engineer from Kuala Lumpur, Malaysia. Currently living and working in Singapore." />
      <meta property="twitter:image" content="/favicon/meta-image.png" />

      <meta name="msapplication-square70x70logo" content="/favicon/mstile70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicon/mstile150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicon/mstile310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicon/mstile310x310.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="application-name" content="jShamsul." />
    </Head>
  )
}
