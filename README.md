# R3F Starter Pack

Este é um projeto inicial para aplicações utilizando React Three Fiber (R3F), uma biblioteca que permite a criação de gráficos 3D em aplicações React. Este projeto inclui uma estrutura básica com componentes para gerenciar a cena, luzes e controles.

## Tecnologias Utilizadas

-   **React**: Biblioteca JavaScript para construir interfaces de usuário.
-   **React Three Fiber**: Um wrapper para a biblioteca Three.js que permite usar Three.js com React.
-   **Leva**: Uma biblioteca para controles de interface de usuário.
-   **Vite**: Um bundler de aplicações web que oferece um ambiente de desenvolvimento rápido.

## Estrutura do Projeto

src/
├── components/
│ ├── canvas/
│ │ ├── Experience.jsx
│ │ ├── Lights.jsx
│ │ ├── Model.jsx
│ │ ├── Scene.jsx
│ │ └── Controls.jsx
│ └── dom/
│ └── Layout.jsx
├── config/
│ └── debug.js
├── hooks/
│ └── useCustomHooks.js
├── utils/
│ └── threeUtil.js
├── App.jsx
└── main.jsx

## Como Executar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/r3f-starter-pack.git
    cd r3f-starter-pack
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

4. Abra seu navegador e acesse `http://localhost:3000` (ou a porta que o Vite indicar).

## Componentes Principais

-   **Experience**: Componente principal que encapsula a cena, luzes e controles.
-   **Scene**: Componente que renderiza o modelo 3D.
-   **Model**: Componente que carrega e exibe o modelo 3D.
-   **Lights**: Componente que configura as luzes na cena.
-   **Controls**: Componente que permite a interação com a cena através de controles orbitais.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adiciona uma nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-sua-feature`).
5. Abra um Pull Request.
