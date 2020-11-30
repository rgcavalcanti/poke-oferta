import { HTTPGetClient } from "data/protocols/HTTPGetClient";

export type IndexPokemonParams = {
  type: 'normal' | 'water' | 'fire' | 'grass'
}

export default class IndexPokemonUseCase<R> {
  constructor(private httpGetClient: HTTPGetClient<IndexPokemonParams, R>) { };

  async execute(): Promise<R> {
    const pokemon = await this.httpGetClient.execute();
    return pokemon;
  }
}
