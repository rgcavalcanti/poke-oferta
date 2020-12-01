import { usePokemon } from "contexts/pokemon";
import styled from "styled-components";
import PokemonCard from "components/PokemonCard";

const Wrapper = styled.div`
  padding: 1rem;
    width: 100%;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }

  ${({ theme }) => theme.media.laptop} {
    height: calc(100vh - 70px);
    overflow: auto;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.device.sizes.laptop};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.media.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const PokemonList: React.FC = () => {
  const { pokemonList} = usePokemon();

  return (
    <Wrapper>
      <List>
        {pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </List>
    </Wrapper>
  );
};

export default PokemonList;
