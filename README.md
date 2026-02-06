# Blog Angular Tech

Este projeto é um blog de tecnologia moderno e minimalista desenvolvido com [Angular CLI](https://github.com/angular/angular-cli).

![Tech Blog Preview](src/assets/images/angular-17.jpg)

## 🚀 Sobre o Projeto

Um blog focado em tecnologia com design estilo revista/jornal ("News"), totalmente responsivo e com interface em Português do Brasil.

### ✨ Funcionalidades

- **Design Moderno e Minimalista**: Foco na tipografia e conteúdo, com bastante espaço em branco.
- **Layout Assimétrico de Grade**: Exibição estilo revista para os posts na página inicial.
- **Componentes Standalone**: Utiliza as práticas mais recentes do Angular 17+.
- **Navegação Fluida**: Roteamento SPA (Single Page Application).
- **Filtros de Categoria**: Interface visual para filtragem de tópicos.
- **Totalmente Responsivo**: Adapta-se a celulares, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

- **Angular 17+**
- **TypeScript**
- **CSS3 Moderno** (Grid, Flexbox, Variáveis)
- **HTML5 Semântico**

## 📦 Como Executar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/joaocffarias/blog-angular.git
   cd blog-angular
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   ng serve --open
   ```

4. **Acesse no navegador**
   Abra `http://localhost:4200/`. A aplicação recarregará automaticamente se você alterar qualquer arquivo de origem.

## 🏗️ Estrutura do Projeto

- `src/app/components`: Componentes reutilizáveis (Header, Footer, PostCard).
- `src/app/pages`: Páginas da aplicação (Home, About, PostDetail).
- `src/app/services`: Serviços para gerenciamento de dados (PostService).
- `src/app/models`: Interfaces TypeScript.
- `src/assets`: Imagens e arquivos estáticos.

## 📝 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `ng serve` | Inicia o servidor local |
| `ng build` | Compila o projeto para produção na pasta `dist/` |
| `ng generate component nome` | Cria um novo componente |
| `ng test` | Executa testes unitários |

---

Desenvolvido com 💙 e Angular.
