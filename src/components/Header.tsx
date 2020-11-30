import { useCart } from "contexts/cart";
import Link from "next/link";
import styled from "styled-components";

import BasketIcon from "icons/icon_shopping_basket.svg";

const Bar = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0 1rem;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: -60px;
  z-index: 100;
`;

const Title = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;

const BasketButton = styled.button`
  background-color: transparent;
  border: none;
  position: sticky;

  ${({ theme }) => theme.media.laptop} {
    display: none;
  }
`;

const StyledBasketIcon = styled(BasketIcon)`
  fill: ${({ theme }) => theme.colors.white};
  width: 2rem;
  height: 2rem;
`;

const TotalCount = styled.span`
  display: inline-block;
  position: absolute;
  font-family: ${({ theme }) => theme.font.secondary};
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.825rem;
  width: 1.125rem;
  line-height: 1.125rem;
  top: 0;
  right: 0;
`;

const Header: React.FC = ({ children }) => {
  const { toggleCart, cart } = useCart();

  return (
    <Bar>
      <Link href="/">
        <Title>{children}</Title>
      </Link>
      {toggleCart && (
        <BasketButton onClick={toggleCart}>
          {cart.totalQuantity() > 0 && (
            <TotalCount>
              {cart.totalQuantity() > 9 ? "+9" : cart.totalQuantity()}
            </TotalCount>
          )}
          <StyledBasketIcon />
        </BasketButton>
      )}
    </Bar>
  );
};

export default Header;
