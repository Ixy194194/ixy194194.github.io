import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>
      <body>
        <div className="grid-background">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
