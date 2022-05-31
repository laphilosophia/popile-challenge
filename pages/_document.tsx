import Document from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

class PopileDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/popile-icon.svg" color="#5bbad5" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="Description"
            content="Sevdiğin ünlülerden doğum günü, tebrik ve yıl dönümü mesajları iste. Özel günlerinde sevdiklerini mutlu et. Popile, yeni nesil hediye."
          />
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
                partytown = {
                  lib: "/_next/static/~partytown/",
                  forward: ["gtag"]
                };
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PopileDocument
