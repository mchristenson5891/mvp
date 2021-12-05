import Layout from '@layout/index';
import Head from 'next/head';
import { ProvideAuth } from '@context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I ♥️ MOVIES</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ProvideAuth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideAuth>
    </>
  );
}

export default MyApp;
