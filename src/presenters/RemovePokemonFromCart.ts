import { Cart } from "domain/entities/Cart";
import { Pokemon } from "domain/entities/Pokemon";
import RemovePokemonFromCartUseCase from "domain/usecases/RemovePokemonFromCartUseCase";

export const RemovePokemonFromCart = (cart: Cart, pokemon: Pokemon): Cart => {
  return new RemovePokemonFromCartUseCase(cart, pokemon).execute();
}