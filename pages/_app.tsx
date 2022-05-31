import Head from 'next/head'
import Script from 'next/script'
import { Partytown } from '@builder.io/partytown/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>

      <Component {...pageProps} />

      <Script strategy="worker" src="https://www.googletagmanager.com/gtag/js?id=G-7HRV62TYR3" />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7HRV62TYR3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default MyApp
