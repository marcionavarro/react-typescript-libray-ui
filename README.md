# UI da biblioteca React TypeScript

### Instalação do React & Typescript com vite
Crie uma pasta, dentro dela rode... 
`npm create vite@latest .`

Escolha

-> React  
-> Typescript

Agora rode o  
`npm install` e depois o `npm run dev`

### Projeto de inicialização React JS Typescript

Crie uma pasta chamada components dentro de src  
Crie um arquivo App.tsx dentro de uma pasta em: components/App/App.tsx  
Crie um arquivo App.scss dentro de uma pasta em: components/App/App.tsx
Delete o App.tsx da pasta src e renomeio o main.tsx para index.tsx  
Faça a importação do componente App dentro de components/App/App.tsx em index.tsx
Abra o index.html e mude a importação do /src/main.tsx para /src/index.tsx
Instale o SCSS  
`npm i -D node-sass`
Crie um arquivo index.ts dentro de uma pasta em: components/App/App.tsx  
Dentro de ts.config adicione o baseUrl abaixo de "jsx": "react-jsx", em include modifique para este formato

```
"include": [
    "src",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exlude":["node_modules"],
```

Instale o NormalizeCss  
 `npm i normalize.css`
Adicione esse css em Ap.scss

```
@import "~normalize.css";

html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

*,
&::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  min-width: 320px;
  height: 100%;
  overflow: hidden;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0
}
```

Crie um arquivo Layout.tsx dentro de components/Layout
Install pretiier  
`npm install --save-dev --save-exact prettier`  
Crie um arquivo chamado prettierrc.json dentro da pasta principal do projeto  
Adicione:

```
{
    "tabWidth":2,
    "arrowParens": "avoid"
}
```

Rode no terminal
`npx prettier --write .`  
`npx prettier --check .`

Crie essas pastas dentro de componets ui-kit/assets/fonts
Instale faça o download da font robot e instale dentro de fonts
Crie a pasta styles dentro de assets e crie os arquivos colors.scss e \_index.scss

Instale o storybook  
`npx storybook@latest`
`npm install @storybook/addon-a11y --save-dev`
