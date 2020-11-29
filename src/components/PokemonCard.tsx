import { useCart } from "contexts/cart";
import { Pokemon } from "domain/entities/Pokemon";
import { formatCurrency } from "helpers/formatCurrency";
import Image from "next/image";
import styled from "styled-components";

const Card = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};

  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow.default};

  &:hover {
  }
`;

const Photo = styled.div`
  width: 100%;
  margin: 0 0 0.5rem 0;
  flex: 1;
`;

const Name = styled.p`
  margin: 0 0 1rem 0;
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.main};
  font-weight: 400;

  ${({theme}) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const Price = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: right;
  font-weight: 500;
  margin: 0 0 0.5rem 0;

  ${({theme}) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
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
`;

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { addToCart } = useCart();
  return (
    <Card>
      <Name>{pokemon.name}</Name>
      <Photo>
        <Image src={pokemon.photo} alt="pokemon" width="200" height="200" />
      </Photo>
      <Price>{formatCurrency(pokemon.price)}</Price>
      <Button onClick={() => addToCart(pokemon)}>Comprar</Button>
    </Card>
  );
};

export default PokemonCard;
