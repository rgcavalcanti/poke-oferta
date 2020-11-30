import { Pokemon, PokemonData } from "domain/entities/Pokemon";
import { createContext, useContext, useState } from "react";

interface PokemonContextData {
  pokemonList: Pokemon[];
  setPokemon: (pokemon: PokemonData[]) => void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const setPokemon = async (pokemonData: PokemonData[]) => {
    setPokemonList(pokemonData.map((pokemon) => new Pokemon(pokemon)));
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextData => {
  const context = useContext(PokemonContext);
  return context;
};

export default PokemonContext;
