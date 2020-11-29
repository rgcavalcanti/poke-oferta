import NormalLayout from "layouts/NormalLayout";
import styled from "styled-components";
import PokemonList from "components/PokemonList";
import ShoppingCart from "components/ShoppingCart";

const Main = styled.main`
  ${({ theme }) => theme.media.laptop} {
    display: flex;
  }
`;

type LayoutFC = React.FC & {
  Layout: React.FC;
};

const Index: LayoutFC = () => (
  <Main>
    <PokemonList type="normal" />
    <ShoppingCart />
  </Main>
);

Index.Layout = NormalLayout;

export default Index;
