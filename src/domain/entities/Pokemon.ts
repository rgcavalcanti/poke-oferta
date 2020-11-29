export type PokemonData = {
  id: number;
  name: string;
  price: number;
  photo: string;
};

export class Pokemon {
  public id: number;
  public name: string;
  public price: number;
  public photo: string;

  constructor(pokemon: PokemonData) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.price = pokemon.price;
    this.photo = pokemon.photo;
  }
}
