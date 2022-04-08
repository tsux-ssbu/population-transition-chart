import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Population transition chart</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
