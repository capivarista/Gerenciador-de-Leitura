# 📚 Gerenciador de Leitura

## ✨ Descrição do Projeto
Este projeto é um Gerenciador de Leitura Pessoal, desenvolvido para facilitar o acompanhamento de livros lidos, sugestões de leitura, tempo gasto com leitura e cadastro de novos livros. Com uma interface amigável e responsiva, permite organizar melhor sua rotina de leitura e acompanhar seu progresso.

## 🎯 Objetivo
O objetivo principal é criar uma interface simples e prática para:
- Cadastrar livros lidos ou que ainda serão lidos;
- Exibir sugestões de leitura;
- Registrar o tempo gasto em cada leitura;
- Visualizar de forma organizada os dados cadastrados.

## ⚙️ Funcionalidades Principais

| Função                     | Descrição                                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------|
| 📖 **Cadastro de Livro**   | Formulário que permite inserir título, autor, status e tempo de leitura.                  |
| 📚 **Lista de Livros**     | Exibe os livros cadastrados no status "Para ler".                                         |
| 💡 **Sugestões de Leitura**| Busca sugestões na API do Google Books ao digitar o título.                               |
| ⏱️ **Registro de Tempo**   | Exibe o tempo gasto por livro e tempo estimado total.                                     |
| ➕ **Menu Flutuante**       | Atalho rápido para cadastrar novos livros lidos ou para ler.                             |

## 🗂 Estrutura dos Arquivos
### `main.html`
- Página principal do sistema:
    - Mostra os livros lidos recentemente, tempo gasto, sugestões e livros para ler.
    - Botão flutuante abre o menu para cadastro de livros.
    - Faz requisições à API REST local (`http://localhost:3000`) para buscar dados de livros e exibir dinamicamente.

### `ler.html`
- Página de cadastro de novos livros:
    - Formulário com campos: Título, Autor, Status (para ler, lendo, lido) e Tempo gasto.
    - Sugestões de livros vindas da Google Books API com base no título digitado.
    - Envio dos dados via `fetch()` para o backend.

## 🔌 Requisitos
- Navegador moderno com suporte a JavaScript ES6+.
- Backend Node.js ou qualquer API REST rodando localmente em `http://localhost:3000`.
- Conexão com a internet para uso da Google Books API.

## 📦 Tecnologias Utilizadas
- **HTML5 / CSS3**
- **Bootstrap 5**
- **JavaScript Vanilla (ES6)**
- **Google Books API**
- **API REST local (Node.js/Express sugerido)**

## 💡 Exemplos de Dados Esperados

```json
// Exemplo de objeto livro enviado via POST
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "status": "lido",
  "tempo_gasto": 240
}
