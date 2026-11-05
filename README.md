# Pegaê — Plataforma de Pedidos para Cantinas Universitárias

O **Pegaê** é um projeto acadêmico desenvolvido durante o 3º semestre do curso de Análise e Desenvolvimento de Sistemas da Universidade Nove de Julho (UniNove).

A proposta é desenvolver uma plataforma web para facilitar a experiência de compra nas cantinas universitárias, permitindo que estudantes consultem estabelecimentos, visualizem produtos, realizem pedidos e acompanhem o processo de retirada.

## 🎯 Objetivo do projeto

O objetivo do Pegaê é tornar a experiência de compra nas cantinas universitárias mais prática e organizada, reduzindo a necessidade de filas e facilitando o processo de retirada dos pedidos.

A proposta prevê uma jornada em que o estudante pode navegar pelos estabelecimentos disponíveis, selecionar produtos, montar sua sacola e realizar um pedido para retirada por meio de um QR Code.

## 📌 Escopo da primeira fase

Nesta primeira fase, o desenvolvimento está concentrado na experiência do estudante, contemplando as interfaces e os principais fluxos de navegação da plataforma.

Algumas informações, como estabelecimentos, produtos e seus respectivos dados, são representadas por **dados simulados (mockups)**. Essa abordagem permite desenvolver e avaliar a experiência do usuário enquanto a estrutura completa da plataforma é construída.

A área destinada à operação e ao gerenciamento das cantinas não faz parte do escopo desta primeira etapa.

## 🖥️ Funcionalidades e telas

As interfaces desenvolvidas contemplam:

- **Home:** página inicial da plataforma.
- **Cadastro e Login:** interfaces de acesso do usuário.
- **Restaurantes:** visualização dos estabelecimentos disponíveis.
- **Sacola:** organização dos produtos selecionados.
- **Pagamento:** interface para escolha e apresentação das opções de pagamento.
- **Pedidos e retirada:** área destinada à consulta dos pedidos e à experiência de retirada por QR Code.
- **Perfil:** visualização e edição das informações do usuário.

> As telas e os fluxos representam o desenvolvimento da primeira fase. Algumas informações e funcionalidades ainda utilizam dados simulados ou dependem da integração com o backend.

## 🛠️ Tecnologias utilizadas

### Front-end
- React
- JavaScript
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

### Back-end
- Node.js
- Express
- CORS
- dotenv

### Banco de dados
- PostgreSQL — previsto para utilização no ambiente de desenvolvimento local.

### Ferramentas
- Git e GitHub
- Figma — utilizado como referência para os protótipos iniciais de interface.
- DBeaver — ferramenta de apoio à administração do banco de dados.

## 📂 Estrutura do projeto

```text
Projeto-Pegae-3-Sem.-Uninove/
│
├── BackEnd/
│   ├── index.js
│   └── package.json
│
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Payment/
│   │   │   ├── Profile/
│   │   │   └── QrCodePickUp/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## ▶️ Como executar o projeto

### Pré-requisitos

- Node.js
- npm

### Front-end

Entre na pasta do front-end:

```bash
cd FrontEnd
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

### Back-end

Entre na pasta do back-end:

```bash
cd BackEnd
```

Instale as dependências:

```bash
npm install
```

A inicialização do servidor depende da configuração atual do back-end. O servidor está configurado para utilizar a porta **3001**.

## 👥 Equipe e contribuições

Projeto desenvolvido em equipe como parte das atividades acadêmicas do curso de Análise e Desenvolvimento de Sistemas.

- **Paulo Fischer:** desenvolvimento front-end e implementação das interfaces da aplicação.
- **Gabriel Pimentel:** desenvolvimento back-end.
- **Henrique Diniz:** elaboração dos protótipos iniciais de interface no Figma.
- **Sofia:** colaboração na concepção e no desenvolvimento visual das interfaces.

## 🚧 Status do projeto

O Pegaê está em desenvolvimento.

As principais interfaces da primeira fase já foram implementadas, e o projeto passa por ajustes visuais e refinamentos. A integração entre front-end, back-end e banco de dados também faz parte da evolução da aplicação.

---

**Pegaê — Mais praticidade na hora de pedir e retirar seu lanche.**