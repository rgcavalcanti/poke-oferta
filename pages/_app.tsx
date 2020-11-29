import DefaultLayout from "layouts/DefaultLayout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.main};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

type AppLayoutProps = AppProps & {
  Component: NextPage & { Layout: React.FC };
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <Head>
        <title>Poke Oferta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </>
  );
}

export default MyApp;
