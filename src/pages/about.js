import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
          <title>About | BBB英会話スクール</title>
          <meta name="description" content="BBB英会話スクール" />
          <meta property="og:title" content="About | BBB英会話スクール" />
          <meta property="og:description" content="BBB英会話スクール" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://next-gsap-rho.vercel.app/" />
          <meta property="og:image" content="https://next-gsap-rho.vercel.app/img/common/ogp.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hogehoge" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>This is the about page</p>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}