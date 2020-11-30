import FireLayout from "layouts/FireLayout";
import styled from "styled-components";
import PokemonList from "components/PokemonList";
import ShoppingCart from "components/ShoppingCart";
import { IndexPokemon } from "presenters/IndexPokemon";
import { InferGetStaticPropsType } from "next";
import { usePokemon } from "contexts/pokemon";
import { useEffect } from "react";

const Main = styled.main`
  ${({ theme }) => theme.media.laptop} {
    display: flex;
  }
`;

function Index({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { setPokemon } = usePokemon();

  useEffect(() => {
    setPokemon(pokemonData);
  }, []);

  return (
    <Main>
      <PokemonList />
      <ShoppingCart />
    </Main>
  );
}

export const getStaticProps = async () => {
  const pokemonData = await IndexPokemon({ type: "fire" });

  return {
    props: {
      pokemonData,
    },
    revalidate: 10
  };
};

Index.Layout = FireLayout;

export default Index;
