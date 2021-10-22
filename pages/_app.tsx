import * as React from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider } from "next-themes";
// import '../styles/globals.css';
import "../styles/index.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = React.useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute="class">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} /> 
      </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
    
  );
}