import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Inzamamul Haque</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="image" property="og:image" content="/thumbnail.png" />
        <meta name="author" content="Inzamamul Haque" />
        <meta
          name="description"
          content="This is my portfolio. Here I have shared my skills and projects"
        />
        <link rel="icon" href="/fav.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
