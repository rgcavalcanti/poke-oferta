import { useCart } from "contexts/cart";
import { formatCurrency } from "helpers/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  pointer-events: none;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 2000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  max-width: ${({ theme }) => theme.device.sizes.tablet};
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 1rem;
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.25rem;
  }
`;

const Close = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  font-size: 1.125rem;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  background-color: pointer;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.contrast};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

type Props = {
  onClose: () => void;
};

const CheckoutModal: React.FC<Props> = ({ onClose }) => {
  const { cart } = useCart();

  return (
    <>
      <Backdrop />
      <Modal>
        <Link href="/">
          <Close onClick={onClose}>
            <Image src="/images/icon_close.svg" width="32" height="32" />
          </Close>
        </Link>
        <Title>Obrigado!</Title>
        <Image width="150" height="150" src="/images/pokemon_coin.png" />
        <Text>
          Temos que pegar todos eles! Pensando nisso a Poke Orferta está te
          devolvendo parte do valor para você poder comprar mais pokémon e se
          tornar um grande mestre.
        </Text>
        <Text>
          Você acaba de ganhar <b>{formatCurrency(cart.totalPrice() * 0.04)}</b>{" "}
          de Cashback!!!
        </Text>
        <Button onClick={onClose}>Quero pegar mais!</Button>
      </Modal>
    </>
  );
};

export default CheckoutModal;
