import { CartItem } from "./CartItem";
import { Pokemon } from "./Pokemon";

export type CartData = {
  items: CartItem[];
};

export class Cart {
  public items: CartItem[];

  constructor(cart: CartData) {
    this.items = cart.items;
  }

  addToCart(newItem: Pokemon): void {
    const index = this.items.findIndex(
      (item) => item.product.id === newItem.id
    );

    if (index !== -1) {
      this.items[index].incriseQuantity();
    } else {
      this.items.push(new CartItem({ product: newItem, quantity: 1 }));
    }
  }

  removeFromCart(itemToBeRemoved: Pokemon): void {
    const index = this.items.findIndex(
      (item) => item.product.id === itemToBeRemoved.id
    );

    if (index === -1) return;

    if (this.items[index].quantity > 1) {
      this.items[index].decreaseQuantity();
    } else {
      this.items.splice(index, 1);
    }
  }

  totalPrice(): number {
    return this.items.map(item => item.quantity * item.product.price).reduce((a, b) => a + b, 0)
  }

  totalQuantity(): number {
    return this.items.map(item => item.quantity).reduce((a, b) => a + b, 0)
  }
}
