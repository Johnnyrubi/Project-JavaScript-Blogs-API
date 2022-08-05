# Boas vindas ao projeto API de Blogs!

### O que foi desenvolvido:

desenvolvi uma API REST de um CRUD posts de blog utilizando uma ORM(sequelize).
---

# Instruções para entregar seu projeto:


### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * git clone

  * Entre na pasta do repositório que você acabou de clonar

2. Instale as dependências 
  * `npm install`

agora você podera visualizar o que eu fiz!
---

### Execução de testes unitários

Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

```sh
npm test
```

Caso queria executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

```sh
npm test tests/req07-createPost.test.js
```
ou
```
npm test req07
```

  **OBS: Os testes irão rodar atráves do seu migrate usando os seguintes comandos:**

  "drop": "npx sequelize-cli db:drop $" -- Dropa o banco

  "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate $" -- Cria o banco e gera as tabelas

  "seed": "npx sequelize-cli db:seed:all $", -- Insere dados na tabela
