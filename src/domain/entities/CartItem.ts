import { Pokemon } from "./Pokemon";

export type CartItemData = {
  product: Pokemon;
  quantity: number;
};

export class CartItem {
  public product: Pokemon;
  public quantity: number;

  constructor(cartItem: CartItemData) {
    (this.product = cartItem.product), (this.quantity = cartItem.quantity);
  }

  incriseQuantity(): void {
    this.quantity += 1;
  }

  decreaseQuantity(): void {
    this.quantity = Math.max(1, this.quantity - 1);
  }
}
