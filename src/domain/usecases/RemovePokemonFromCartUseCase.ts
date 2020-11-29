import { Cart } from "domain/entities/Cart";
import { Pokemon } from "domain/entities/Pokemon";

export default class RemovePokemonFromCartUseCase {
  private cart: Cart;
  private pokemon: Pokemon;

  constructor(cart: Cart, pokemon: Pokemon) {
    this.cart = cart;
    this.pokemon = pokemon;
  }

  execute(): Cart {
    const newCart = new Cart({items: this.cart.items})
    newCart.removeFromCart(this.pokemon);
    this.cart = newCart;
    return this.cart
  }
}
