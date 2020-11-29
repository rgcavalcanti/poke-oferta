import { Cart } from "domain/entities/Cart";
import { Pokemon } from "domain/entities/Pokemon";
import { AddPokemonToCart } from "presenters/AddPokemonToCart";
import { RemovePokemonFromCart } from "presenters/RemovePokemonFromCart";
import { createContext, useContext, useState } from "react";

interface CartContextData {
  showCart: boolean;
  toggleCart: () => void;
  cart: Cart;
  addToCart: (product: Pokemon) => void;
  removeFromCart: (product: Pokemon) => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart>(new Cart({ items: [] }));

  const toggleCart = () => setShowCart((oldValue) => !oldValue);

  const addToCart = (product: Pokemon) => {
    const newCart = AddPokemonToCart(cart, product);
    setCart(newCart);
  };

  const removeFromCart = (product: Pokemon) => {
    const newCart = RemovePokemonFromCart(cart, product);
    setCart(newCart);
  };

  const checkout = () => {
    setCart(new Cart({ items: [] }));
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        toggleCart,
        cart,
        addToCart,
        removeFromCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);
  return context;
};

export default CartContext;
