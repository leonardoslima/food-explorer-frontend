# 🍽️ Food Explorer — Front-end

Interface web do Food Explorer, um cardápio digital interativo para restaurante, com autenticação de usuários e painel administrativo para gerenciamento de pratos.

## 📋 Sobre o projeto

O Food Explorer é a interface client-side de um sistema completo de cardápio digital. O usuário pode navegar pelos pratos, pesquisar por nome ou ingrediente, adicionar favoritos e fazer pedidos. O administrador conta com um painel para criar, editar e remover itens do cardápio.

## ✨ Funcionalidades

- Autenticação de usuários (login/cadastro)
- Listagem e pesquisa de pratos
- Visualização detalhada de cada prato
- Favoritar pratos
- Carrinho de compras
- Painel administrativo (criar, editar, remover pratos)
- Layout responsivo (mobile e desktop)

## 🚀 Tecnologias

- **React 18** — biblioteca de interface
- **Vite** — build tool e servidor de desenvolvimento
- **React Router DOM v6** — navegação entre páginas
- **styled-components** — estilização com CSS-in-JS
- **Axios** — requisições HTTP para a API
- **Swiper** — carrossel de pratos
- **Phosphor Icons** — biblioteca de ícones

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js >= 16
- API do Food Explorer rodando localmente

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leonardoslima/food-explorer-frontend.git

# Acesse a pasta
cd food-explorer-frontend

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3333
```

### Executando

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build

```bash
npm run build
```

## 🔗 Back-end

Este projeto consome a API do [food-explorer-backend](https://github.com/leonardoslima/food-explorer-backend).

## 🎓 Desenvolvido durante o curso da Rocketseat
