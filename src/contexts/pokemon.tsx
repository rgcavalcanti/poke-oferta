import { IndexPokemonParams } from "data/usecases/IndexPokemonUseCase";
import { Pokemon } from "domain/entities/Pokemon";
import { IndexPokemon } from "presenters/IndexPokemon";
import { createContext, useContext, useState } from "react";

interface PokemonContextData {
  pokemonList: Pokemon[];
  getPokemon: (type: "normal" | "water") => void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const getPokemon = async (type: "normal" | "water") => {
    const pokemonData = await IndexPokemon({ type });
    setPokemonList(pokemonData.map((pokemon) => new Pokemon(pokemon)));
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, getPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextData => {
  const context = useContext(PokemonContext);
  return context;
};

export default PokemonContext;
