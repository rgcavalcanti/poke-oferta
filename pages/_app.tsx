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
        {/* HTML Tags */}
        <title>Poke Oferta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <meta
          name="description"
          content="Acesse agora o maior e-commecerce para compra e venda de pokemón!"
        />

        {/* Facebook Tags */}
        <meta property="og:url" content="https://poke-oferta.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Poke Oferta" />
        <meta
          property="og:description"
          content="Acesse agora o maior e-commecerce para compra e venda de pokemón!"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />

        {/* Twiter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="poke-oferta.vercel.app" />
        <meta
          property="twitter:url"
          content="https://poke-oferta.vercel.app/"
        />
        <meta name="twitter:title" content="Poke Oferta" />
        <meta
          name="twitter:description"
          content="Acesse agora o maior e-commecerce para compra e venda de pokemón!"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </>
  );
}

export default MyApp;
