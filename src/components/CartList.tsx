import { useCart } from "contexts/cart";
import styled from "styled-components";
import CartItem from "components/CartItem";

const List = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
  flex: 1;
`;

const CartList: React.FC = () => {
  const { cart } = useCart();

  return (
    <List>
      {cart.items.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </List>
  );
};

export default CartList;
