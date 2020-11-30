import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import fireTheme from "themes/fireTheme";
import Head from "next/head";
import { CartProvider } from "contexts/cart";
import { PokemonProvider } from "contexts/pokemon";

const NormalLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={fireTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PokemonProvider>
        <CartProvider>
          <Header>Poke Oferta - Fogo</Header>
          {children}
        </CartProvider>
      </PokemonProvider>
    </ThemeProvider>
  );
};

export default NormalLayout;
