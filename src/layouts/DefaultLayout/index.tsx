import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import Head from "next/head";
import defaultTheme from "themes/defaultTheme";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header>Poke Oferta</Header>
      {children}
    </ThemeProvider>
  );
};

export default DefaultLayout;
