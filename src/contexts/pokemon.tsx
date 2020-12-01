import { Pokemon, PokemonData } from "domain/entities/Pokemon";
import { createContext, useContext, useRef, useState } from "react";
import Fuse from "fuse.js";

interface PokemonContextData {
  pokemonList: Pokemon[];
  setPokemon: (pokemon: PokemonData[]) => void;
  filter: (pokemonName: string) => void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider: React.FC = ({ children }) => {
  const pokemonList = useRef<Pokemon[]>([]);
  const [pokemonFilteredList, setPokemonFilteredList] = useState<Pokemon[]>([]);

  const setPokemon = async (pokemonData: PokemonData[]) => {
    const pokemon = pokemonData.map((pokemon) => new Pokemon(pokemon));
    pokemonList.current = pokemon;
    setPokemonFilteredList(pokemon);
  };

  const filter = (pokemonName: string): void => {
    if (pokemonName) {
      const options = {
        threshold: 0.4,
        keys: ["name"],
      };

      const fuse = new Fuse(pokemonList.current, options);
      const result = fuse.search(pokemonName);

      setPokemonFilteredList(result.map((result) => result.item));
    } else {
      setPokemonFilteredList(pokemonList.current);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonList: pokemonFilteredList, setPokemon, filter }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextData => {
  const context = useContext(PokemonContext);
  return context;
};

export default PokemonContext;
