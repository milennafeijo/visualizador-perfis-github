# Visualizador de Perfis do GitHub

Um projeto simples em HTML, CSS e JavaScript que consome a API pública do GitHub para mostrar dados de perfil e os repositórios de um usuário.

Veja o projeto <a href="https://milennafeijo.github.io/visualizador-perfis-github/">aqui</a>

## Funcionalidades

- Busca por usuário do GitHub
- Exibe avatar, nome, usuário, bio, seguidores e seguindo
- Lista os repositórios públicos do usuário
- Mostra *stars*, *forks*, *watchers* e linguagem de cada repositório
- Interface responsiva com cards de repositório lado a lado

## Estrutura do projeto

- `index.html` - marcação da página
- `src/css/styles.css` - estilos principais
- `index.js` - lógica de interação e busca
- `api.js` - funções que consomem a API do GitHub
- `ui.js` - renderização do perfil e repositórios

## Detalhes técnicos

- A API utilizada é `https://api.github.com`
- A busca de repositórios está limitada a 10 itens e ordenada pelo mais recente



