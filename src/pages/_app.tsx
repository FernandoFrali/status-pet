import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Status Pet</title>
        <link rel="shortcut icon" href="/fav.svg" />
        <link rel="apple-touch-icon" href="/fav.svg" />
        <meta name="description" content="A virtual store to buy pet collars for your best friend!"/>
      </Head>
      <Component {...pageProps} />
    </>
)
}
