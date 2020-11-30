import IndexPokemonUseCase, { IndexPokemonParams } from "data/usecases/IndexPokemonUseCase";
import { PokemonData } from "domain/entities/Pokemon";
import { AxiosHttpGetClient } from "infra/AxiosHttpGetClient";

enum Types {
  normal = 1,
  water = 11,
  fire = 10,
  grass = 12
}

type Response = {
  pokemon: {
    pokemon: {
      name: string,
      url: string
    }
  }[]
}

export const IndexPokemon = async (params: IndexPokemonParams): Promise<PokemonData[]> => {
  const httpClient = new AxiosHttpGetClient<IndexPokemonParams, Response>(`type/${Types[params.type]}`, params)
  const pokemonRes = await new IndexPokemonUseCase(httpClient).execute()

  return pokemonRes.pokemon.map(({ pokemon }) => ({
    id: Number(pokemon.url.match(/pokemon\/(.*)\//)?.[1] ?? 0),
    name: pokemon.name,
    photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.match(/pokemon\/(.*)\//)?.[1] ?? 0}.png`,
    price: (Math.floor(Math.random() * 10) + 1) * 1000
  }))
}