# Poke Oferta

O Poke Oferta se trata de uma loja virtual de pokémon utilizando os dados da [PokéAPI](https://pokeapi.co/) construída com Next.js e Typescript. Você pode acessar através [desse link](http://poke-oferta.vercel.app/)

## Como rodar o projeto?

Para rodar o projeto é necessário instalar as dependências com [npm](https://docs.npmjs.com/cli/init) ou [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) como mostrado abaixo:

```bash
npm install
npm run build
npm start
# or
yarn install
yarn build
yarn start
```

## Estrutura do projeto

Para estruturar a lógica das páginas, o projeto foi construído com conceitos de Clean Architecture, tornando assim o projeto mais simples de realizar manutenções e facilitando a criação de testes unitários em cima da lógica do negócio.

O Projeto ficou com a seguinte estrutura:

    ├─ pages  -> rotas da aplicação 
    ├─ public -> arquivos públicos acessíveis através de '/'
    ├─ src
    │   ├─ components   -> componentes da aplicação
    │   ├─ config       -> configurações globais do projeto
    │   ├─ contexts     -> contextos de estados globais da aplicação
    │   ├─ data         -> camada de tratamento de dados externos
    │   ├─ declarations -> definição de módulos do typescript
    │   ├─ domain       -> arquivos do domínio da aplicação 
    │   │   ├─ entities -> entidades da aplicação
    │   │   └─ usecases -> casos de uso da aplicação               
    │   ├─ helpers      -> utilitários comuns do projeto
    │   ├─ icons        -> ícones SVG
    │   ├─ infra        -> camada que faz a implementação dos contratos de 'data'
    │   ├─ layouts      -> layouts da aplicação
    │   ├─ presenters   -> camada que conecta as camadas para utilização nas telas
    │   ├─ themes       -> temas da aplicação
    │   └─ views        -> componentes das páginas da aplicação
    └── ...