import { useCart } from "contexts/cart";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CartList from "components/CartList";
import { formatCurrency } from "helpers/formatCurrency";
import Image from "next/image";
import CheckoutModal from "./CheckoutModal";

const Cart = styled.aside<{ show: boolean }>`
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 0;
  right: 0;
  height: 100vh;
  transform: translateX(${({ show }) => (show ? 0 : 100)}%);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-flow: column;

  ${({ theme }) => theme.media.laptop} {
    position: static;
    transform: none;
    height: calc(100vh - 60px);
    max-width: 400px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Total = styled.div`
  margin: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.main};
`;

const TotalText = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 1.5rem;
  text-align: left;
  margin: 0;
  font-weight: 700;
`;

const TotalPrice = styled(TotalText)`
  text-align: right;
  font-family: ${({ theme }) => theme.font.main};
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.font.secondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.contrast};
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;

const Close = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;

  ${({ theme }) => theme.media.laptop} {
    display: none;
  }
`;

const ShoppingCart: React.FC = () => {
  const { toggleCart, showCart, cart, checkout } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const openCheckoutModal = (): void => {
    setShowCheckoutModal(true);
    toggleCart();
  };

  const handleCloseCheckoutModal = (): void => {
    checkout();
    setShowCheckoutModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "initial";
  }, [showCart]);

  return (
    <>
      {showCheckoutModal && (
        <CheckoutModal onClose={handleCloseCheckoutModal} />
      )}
      <Cart show={showCart}>
        <Title>Carrinho</Title>
        <Close onClick={toggleCart}>
          <Image src="/images/icon_close.svg" width="32" height="32" />
        </Close>
        <CartList />
        <Total>
          <TotalText>Total:</TotalText>
          <TotalPrice>{formatCurrency(cart.totalPrice())}</TotalPrice>
        </Total>
        <CheckoutButton
          disabled={cart.totalQuantity() === 0}
          onClick={openCheckoutModal}
        >
          Finalizar compra
        </CheckoutButton>
      </Cart>
    </>
  );
};

export default ShoppingCart;
