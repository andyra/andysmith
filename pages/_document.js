import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html className="scroll-smooth" lang="en">
    <Head>
      <link
        rel="preload"
        href="/fonts/output-sans-regular-subset.woff2"
        as="font"
        crossOrigin=""
      />
    </Head>
    <body className="bg-ground font-sans text-base text-primary dark:antialiased">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
