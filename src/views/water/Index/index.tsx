import WaterLayout from "layouts/WaterLayout";
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
    <PokemonList type="water" />
    <ShoppingCart />
  </Main>
);

Index.Layout = WaterLayout;

export default Index;
