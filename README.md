# Spotify Challenge

Um player de música inspirado no Spotify, desenvolvido com React e TypeScript em uma arquitetura de monorepo.

## Estrutura do Projeto

O projeto é organizado em um monorepo com dois apps principais:

- **`apps/player`** - Interface web do player de música
- **`apps/api`** - API REST que simula endpoints do Spotify
- **`packages/`** - Configurações compartilhadas (ESLint, TypeScript, Theme)

## Tecnologias Utilizadas

### Player (Frontend)
- **React 19** + **TypeScript**
- **Vite** - Build tool e dev server
- **React Router Dom** - Roteamento
- **Ant Design** - Biblioteca de componentes UI
- **TailwindCSS** - Estilização
- **Zustand** - Gerenciamento de estado
- **TanStack Query** - Cache e sincronização de dados
- **i18next** - Internacionalização (PT-BR, EN, FR)
- **Axios** - Cliente HTTP

### API (Backend)
- **Node.js** + **Express**
- **TypeScript**
- **CORS** + **Helmet** - Segurança
- **TSX** - Execução TypeScript em desenvolvimento

### DevOps
- **Turborepo** - Monorepo build system
- **PNPM** - Gerenciador de pacotes
- **ESLint** + **Prettier** - Padrões de qualidade do código

## Arquitetura do Player

O app player segue uma arquitetura em camadas bem definidas:

```
src/
├── components/
│ ├── providers/ # Providers globais (i18n, query, theme)
│ ├── globals/ # Componentes globais (Layout, Routes)
│ └── shared/ # Componentes reutilizáveis
├── pages/
│ ├── private/ # Páginas autenticadas (Artists, Search)
│ └── public/ # Páginas públicas (Welcome)
├── services/ # Integração com APIs
├── store/ # Estados globais (Zustand)
├── hooks/ # Custom hooks
├── interfaces/ # Tipagens TypeScript
└── utils/ # Funções utilitárias
```

## Principais Funcionalidades
- **Roteamento Protegido** - Rotas públicas e privadas
- **Gerenciamento de Estado** - Controles do player, sessão, loader
- **Internacionalização** - Suporte a múltiplos idiomas
- **Lazy Loading** - Carregamento sob demanda de componentes
- **Error Boundary** - Tratamento global de erros

## Como Rodar o Projeto

#### Pré-requisitos
- Node.js 22+
- PNPM 8+

#### Instalação
```bash
pnpm install

pnpm dev

pnpm --filter @spotify/player dev       # Player na porta 5173
pnpm --filter @kanastra/bff-player dev  # API na porta 3001
```
