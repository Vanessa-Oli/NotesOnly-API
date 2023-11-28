<h1 align="center">
    <img src=".github/logo-noteonly.svg" title="NotesOnly" alt="" width="30px" />
    NotesOnly API
</h1>

## 💻 About

Este é o repositório do back-end da aplicação NotesOnly ([link do front-end](https://github.com/Vanessa-Oli/NotesOnly-Web)), sendo está uma aplicação web na qual os usuários podem se cadastrar e criar de forma organizada anotações sobre determinados assuntos, tendo disponível a adição de titulo, descrição, links e tags para cada nota, além de contar a edição de perfil do usuário, podendo alterar seu avatar, nome, email e senham, entre outras funcionalidades.

---

## 🔗 Deploy

O acesso ao deploy da API fica disponível através da seguinte URL base: https://notes-only.onrender.com

> Obs: a aplicação pode demorar um pouco para entrar na primeira execução depois de um tempo, devido ao back-end estar rodando através do plano gratuito na plataforma de hospedagem.

---

## 🚀 How it works

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:Vanessa-Oli/NotesOnly-API.git

# Acesse a pasta do projeto no terminal/cmd
$ cd NotesOnly-API

# Configure as variáveis de ambiente em um arquivo .env na raiz do projeto (use o arquivo .env.example como base)

# Instale as dependências
$ npm install

# Execute as migrations
$ npm run migrate:dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Executar testes (caso queira)
$ npm test
```
#### 🧭 Rodando a aplicação web (Frontend) Utilzando docker

```bash
# Clone este repositório
$ git clone git@github.com:Vanessa-Oli/NotesOnly-API.git

# Vá para a pasta da aplicação Front End
$ cd NotesOnly-API

# Buildar o container
$ docker-compose up -- build

# Execute a aplicação em modo de desenvolvimento
$ docker-compose up

# A aplicação será aberta em uma porta especificada no terminal de execução
```
### Rotas

| Método | Rota	| Descrição	| Parâmetros | Observação |
| --- | --- | --- | --- | --- |
| POST | /sessions | Retorna os dados de autenticação de um usuário existente | `email`, `password` | enviar parâmetros no `body` | 
| GET	| /users	| Retorna um usuário específico	| `token` |	enviar `token` de autenticação no `header` |
| POST | /users | Cria um novo usuário | `name`, `email`, `password` | enviar parâmetros no `body` da requisição |
| PUT | /users | Atualiza um usuário específico | `token`, `name`, `email`, `password`, `newPassword`(opcional) | enviar `token` pelo `header` e o restante no `body` |
| PATCH | /users/avatar | Atualiza o avatar de um usuário específico | `token`, `avatar` | enviar `token` pelo `header` e o `avatar` no formato `multipart` |
| GET | /notes | Retorna todas as notas de um usuário | `token` | enviar `token` de autenticação no `header` |
| GET | /notes:id | Retorna uma nota específica | `id`, `token` |  enviar `token` pelo `header` e `id` pela rota |
| POST | /notes | Cria uma nota | `title`, `description`, `tags`(array, optional), `links`(array, optional) | enviar `token` pelo `header` e o restante no `body` |
| DELETE | /notes/:id | Deleta uma nota específica | `id`, `token` | enviar `token` pelo `header` e `id` pela rota |
| GET | /tags | Retornas as tags criadas por um usuário | `token` | enviar `token` de autenticação no `header` |
| GET | /files/:filename | Retorna arquivos de avatar | `filename` | enviar `filename` pela rota |

> Obs: todos os parâmetros enviados e respondidos no corpo da requisição e resposta estão no formato `JSON`.

---

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/pt-br/)**
-   **[Nodemon](https://www.npmjs.com/package/nodemon)**
-   **[Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)**
-   **[Knex](https://knexjs.org/)**
-   **[PostgreSQL](https://node-postgres.com/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[CORS](https://www.npmjs.com/package/cors)**
-   **[Dotenv](https://www.npmjs.com/package/dotenv)**
-   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
-   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[Multer](https://www.npmjs.com/package/multer)**
-   **[PM2](https://pm2.keymetrics.io/)**
-   **[Jest](https://jestjs.io/pt-BR/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)

---

## ✍ Author

<img alt="Vanessa" title="Vanessa" src="https://media.licdn.com/dms/image/D4D03AQFJRVv38geHMA/profile-displayphoto-shrink_200_200/0/1698956001114?e=1706745600&v=beta&t=8FIgRn8Dgw0GSbI0YJ0PvVP01s0nxmz96VyE-BZ_dyM" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Vanessa_Christiano-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vanessa-christiano-de-oliveira-036085184/)](https://www.linkedin.com/in/vanessa-christiano-de-oliveira-036085184/)

[![Gmail Badge](https://img.shields.io/badge/-vanessachristiano10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vanessachristiano10@gmail.com)](mailto:vanessachristiano10@gmail.com)


---
