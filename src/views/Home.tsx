import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import normalTheme from "themes/normalTheme";
import waterTheme from "themes/waterTheme";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const Content = styled.main`
  padding: 1rem;
  height: calc(100vh - 60px);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TypesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  max-width: ${({ theme }) => theme.device.sizes.tablet};
  width: 100%;
`;

const Item = styled.li``;

const PokemonType = styled.a<{ type: "normal" | "water" }>`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  ${({ type, theme }) => {
    switch (type) {
      case "normal":
        return `color: ${normalTheme.colors.main}`;
      case "water":
        return `color: ${waterTheme.colors.main}`;
      default:
        return `color: ${theme.colors.main}`;
    }
  }};
  display: block;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.white};

    ${({ type, theme }) => {
    switch (type) {
      case "normal":
        return `background-color: ${normalTheme.colors.main}`;
      case "water":
        return `background-color: ${waterTheme.colors.main}`;
      default:
        return `background-color: ${theme.colors.main}`;
    }
  }};
  }

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
    font-size: 1.25rem;
  }
`;

const Index: React.FC = () => {
  return (
    <Content>
      <Image
        src="/images/bg_pikachu.png"
        width="300"
        height="300"
        layout="fixed"
      />
      <Title>Que tipo de Pokemón você procura?</Title>
      <TypesList>
        <Item>
          <Link href="/normal" passHref>
            <PokemonType type="normal">Normal</PokemonType>
          </Link>
        </Item>
        <Item>
          <Link href="/agua" passHref>
            <PokemonType type="water">Água</PokemonType>
          </Link>
        </Item>
      </TypesList>
    </Content>
  );
};

export default Index;
