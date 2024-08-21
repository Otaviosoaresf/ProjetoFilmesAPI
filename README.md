# FilmesInfo

Projeto consiste em um site que exibe informações de filmes buscado pelo usuário. Os dados são consumidos de uma API publica chamada OMDB API.
O site foi desenvolvido todo em Inglês, pois a API utilizada para os filmes devolvem dados em Inglês.

## Funcionalidades

1. O site contém uma barra de pesquisa para se pesquisar os títulos dos filmes que o usuário tem interesse.
2. Após o filmes aparecer caso a busca seja bem sucedida, será exibido na tela informações do filme como título, gênero, ano de lançamento e etc..
3. Ao clicar no poster do filme quando o processo descrito no passo acima ocorrer, você irá abrir uma página nova com mais informações ainda sobre o filme pesquisado.

## Tecnologias Utilizadas

1. Framework: React
2. Linguagem: Typescript
3. Build: Vite
4. CSS: Styled Components
5. Comunicação com a API: Axios
6. Encapsulamento de estados e conexão com API: Context API
7. Rotas entre páginas: React-Router-Dom
8. Fonte de dados: OMDB API


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
