# 🧪 Testes E2E com Cypress

## 🚀 Como Executar

### Pré-requisitos
```bash
# Instalar dependências (se ainda não instalou)
pnpm add -D cypress @cypress/vite-dev-server start-server-and-test
```

### Executar Testes

#### Modo Interativo (recomendado para desenvolvimento)
```bash
# Inicia o servidor e abre o Cypress
pnpm test:e2e:open
```

#### Modo Headless (para CI/CD)
```bash
# Executa todos os testes em modo headless
pnpm test:e2e
```

#### Apenas Cypress (servidor já rodando)
```bash
# Se o servidor já estiver rodando em localhost:5173
pnpm cypress:open  # Modo interativo
pnpm cypress:run   # Modo headless
```

## 📁 Estrutura dos Testes

```
cypress/
├── e2e/
│   └── artists-flow.cy.ts     # Teste principal do fluxo de artistas
├── fixtures/
│   ├── artists.json           # Mock de dados de artistas
│   ├── artist-details.json    # Mock de detalhes do artista
│   ├── artist-albums.json     # Mock de álbuns do artista
│   └── artist-tracks.json     # Mock de tracks do artista
├── support/
│   ├── commands.ts            # Comandos customizados
│   └── e2e.ts                 # Configurações globais
└── tsconfig.json              # Configuração TypeScript
```

## 🎯 Cenários Testados

### Fluxo Principal (/artists → /artist/:id)
- ✅ **Navegação**: Lista de artistas → Detalhes do artista
- ✅ **Carregamento**: Dados carregam corretamente
- ✅ **Informações**: Nome, seguidores, álbuns e tracks são exibidos
- ✅ **Reprodução**: Clique em track inicia reprodução
- ✅ **Navegação reversa**: Botão voltar funciona
- ✅ **Tratamento de erro**: Exibe mensagem de erro quando API falha

### Comandos Customizados
- `cy.visitArtistsList()` - Navega para /artists
- `cy.waitForArtistsToLoad()` - Aguarda lista carregar
- `cy.clickFirstArtist()` - Clica no primeiro artista
- `cy.waitForArtistDetailsToLoad()` - Aguarda detalhes carregarem

## 🏷️ Data Test IDs Utilizados

### Lista de Artistas
- `[data-testid="artists-list"]` - Container da lista
- `[data-testid="artist-card"]` - Card do artista
- `[data-testid="artist-name"]` - Nome do artista
- `[data-testid="error-message"]` - Mensagem de erro

### Detalhes do Artista
- `[data-testid="artist-details"]` - Container principal
- `[data-testid="artist-name"]` - Nome do artista
- `[data-testid="artist-followers"]` - Número de seguidores
- `[data-testid="artist-albums"]` - Seção de álbuns
- `[data-testid="artist-tracks"]` - Seção de tracks
- `[data-testid="album-card"]` - Card do álbum
- `[data-testid="track-item"]` - Item de track
- `[data-testid="play-button"]` - Botão de reproduzir
- `[data-testid="back-to-artists"]` - Botão voltar

### Player/Controles
- `[data-testid="player-controls"]` - Controles do player
- `[data-testid="current-track-name"]` - Nome da música atual

## 🛠️ Configuração

### cypress.config.ts
- **Base URL**: http://localhost:5173
- **Viewport**: 1280x720
- **Timeouts**: 10s para comandos e requests
- **Video**: Habilitado para debugging
- **Screenshots**: Habilitado em falhas

### Interceptação de APIs
Os testes usam `cy.intercept()` para mockar as seguintes APIs:
- `GET **/artists**` → `fixtures/artists.json`
- `GET **/artists/*` → `fixtures/artist-details.json`
- `GET **/artists/*/albums**` → `fixtures/artist-albums.json`
- `GET **/artists/*/top-tracks**` → `fixtures/artist-tracks.json`

## 🐛 Troubleshooting

### Problemas Comuns

1. **Timeout nos testes**
   ```bash
   # Aumentar timeout no cypress.config.ts
   defaultCommandTimeout: 15000
   ```

2. **Servidor não iniciou**
   ```bash
   # Verificar se a porta 5173 está livre
   lsof -ti:5173
   # Matar processo se necessário
   kill -9 $(lsof -ti:5173)
   ```

3. **Fixtures não carregando**
   ```bash
   # Verificar se os arquivos JSON existem em cypress/fixtures/
   ls cypress/fixtures/
   ```

## 📊 Relatórios

Os testes geram:
- **Videos**: `cypress/videos/`
- **Screenshots**: `cypress/screenshots/`
- **Relatórios**: Console output com detalhes dos testes

## 🔧 Desenvolvimento

Para adicionar novos testes:

1. Crie o arquivo `.cy.ts` em `cypress/e2e/`
2. Adicione fixtures necessárias em `cypress/fixtures/`
3. Use os comandos customizados em `cypress/support/commands.ts`
4. Adicione `data-testid` nos componentes React

## 🎯 Próximos Passos

- [ ] Testes de busca/search
- [ ] Testes de responsividade
- [ ] Testes de internacionalização
- [ ] Testes de performance
- [ ] Integração com CI/CD
