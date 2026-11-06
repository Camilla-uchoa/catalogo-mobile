# catalogo-mobile
# Meu Catálogo

Aplicativo mobile desenvolvido com **React Native e Expo**, com o objetivo de consumir uma API externa e apresentar produtos de forma simples e organizada.

## Sobre o projeto

O Meu Catálogo é um projeto de estudo desenvolvido para praticar o desenvolvimento de aplicações mobile e a integração com APIs REST.

A aplicação realiza uma requisição à [Fake Store API](https://fakestoreapi.com/) para buscar produtos e exibir suas principais informações na tela.

## Funcionalidades

- Consumo de API externa utilizando `fetch`;
- Exibição de produtos em cards;
- Apresentação da imagem, nome e preço dos produtos;
- Atualização dos dados a partir da resposta da API.

## Tecnologias utilizadas

- **React Native:** desenvolvimento da interface mobile;
- **Expo:** ambiente e ferramentas para desenvolvimento;
- **JavaScript:** linguagem de programação;
- **Fake Store API:** fornecimento dos dados dos produtos;
- **Git e GitHub:** versionamento e armazenamento do código.

## API utilizada

[Fake Store API](https://fakestoreapi.com/products?limit=2)

Endpoint utilizado para obter os dois primeiros produtos:

```http
GET https://fakestoreapi.com/products?limit=2
```

## Como executar o projeto

### Pré-requisitos

- Node.js instalado;
- npm instalado;
- Expo Go instalado no smartphone (opcional, para testar no dispositivo).

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Camilla-uchoa/catalogo-mobile.git
```

2. Entre na pasta do aplicativo:

```bash
cd catalogo-mobile/MeuCatalogo
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o Expo:

```bash
npx expo start
```

5. Escaneie o QR Code com o Expo Go para visualizar o aplicativo no smartphone.

## Objetivo de aprendizagem

Este projeto foi desenvolvido com foco na prática dos seguintes conceitos:

- Componentes do React Native;
- Hooks `useState` e `useEffect`;
- Requisições HTTP com `fetch`;
- Manipulação e exibição de dados JSON;
- Renderização de listas com `map`;
- Estilização de interfaces mobile.

---

**Desenvolvido por Camilla Uchôa**

Projeto acadêmico e de aprendizado em desenvolvimento mobile.