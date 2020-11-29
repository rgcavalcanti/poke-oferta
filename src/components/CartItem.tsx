import { useCart } from "contexts/cart";
import { CartItem as CartItemEntity } from "domain/entities/CartItem";
import styled from "styled-components";
import { formatCurrency } from "helpers/formatCurrency";
import Image from "next/image";

const Item = styled.li`
  display: grid;

  grid-template-columns: auto 1fr 50px;
  grid-template-areas:
    "img name qtd"
    "img price qtd";
  align-items: center;
  justify-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow.default};

  & + & {
    margin-top: 1rem;
  }
`;

const Name = styled.p`
  grid-area: name;
  align-self: start;
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 400;
  margin: 0;
  font-size: 1.5rem;
  align-self: end;
`;

const Price = styled.p`
  grid-area: price;
  font-size: 1.125rem;
  text-align: right;
  width: 100%;
  margin: 0;
  align-self: end;
  font-weight: 700;
`;

const Quantity = styled.div`
  grid-area: qtd;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  width: 2rem;
  height: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.default};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.contrast};
  }
`;

const Photo = styled.div`
  grid-area: img;
  height: 100px;
  border-right: 1px solid ${({ theme }) => theme.colors.main};
  padding-right: 1rem;
`;

type Props = {
  item: CartItemEntity;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <Item>
      <Photo>
        <Image
          src={item.product.photo}
          alt="pokemon"
          width="100"
          height="100"
        />
      </Photo>
      <Name>{item.product.name}</Name>
      <Price>{formatCurrency(item.product.price)}</Price>
      <Quantity>
        <QuantityButton onClick={() => addToCart(item.product)}>
          +
        </QuantityButton>
        <p>qtd: {item.quantity}</p>
        <QuantityButton onClick={() => removeFromCart(item.product)}>
          -
        </QuantityButton>
      </Quantity>
    </Item>
  );
};

export default CartItem;
