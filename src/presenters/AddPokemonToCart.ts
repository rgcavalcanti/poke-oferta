import { Cart } from "domain/entities/Cart";
import { Pokemon } from "domain/entities/Pokemon";
import AddPokemonToCartUseCase from "domain/usecases/AddPokemonToCartUseCase";

export const AddPokemonToCart = (cart: Cart, pokemon: Pokemon): Cart => {
  return new AddPokemonToCartUseCase(cart, pokemon).execute();

}