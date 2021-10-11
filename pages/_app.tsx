import * as React from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import Head from 'next/head';
import { ThemeProvider } from "next-themes";

import '../styles/globals.css';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} /> 
    </ThemeProvider>
  );
}