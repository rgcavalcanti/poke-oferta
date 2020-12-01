import { usePokemon } from "contexts/pokemon";
import { ChangeEvent } from "react";
import styled from "styled-components";

const SearchInput = styled.input.attrs({
  type: "search",
})`
  order: 1;
  width: calc(100% - 4rem);
  position: sticky;
  top: 1rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  outline: none;

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.device.sizes.mobileL};
    order: initial;
  }
`;

export default function SearchBar() {
  const { filter } = usePokemon();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    filter(event.target.value);
  };

  return <SearchInput onChange={handleSearch} placeholder="Buscar pokémon" />;
}
