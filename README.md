# restAPP---back


<h3 align="center">

restAPP é um projeto **Open Source** desenvolvido a fim de melhorar minhas habilidades em ***ExpressJS, Javascript, REST API, NodeJS, JsonWebToken, YUP***.

</h3>

## **:rocket: OBJETIVO**

A aplicação desenvolvida é um servidor em nodejs utlizando o express para uma transportadora fictícia, o FastFeet, para melhorar os meus conhecimentos em ExpressJS.

## **:computer: TECNOLOGIAS**


#### **Servidor** ([ExpressJS][expressjs] + [JavaScript][javascript])

  - **[Yup][yup]**
  - **[JsonWebToken][jsonwebtoken]**
  - **[Bcryptjs][bcryptjs]**
  - **[Sequelize][sequelize]**
  - **[Bee-queue](https://github.com/bee-queue/bee-queue)**
  - **[Date-FNS](https://date-fns.org/)**
  - **[Express](https://expressjs.com/)**
  - **[Mongoose](https://mongoosejs.com/)**
  - **[NodeMailer](https://nodemailer.com/about/)**
  
    "date-fns": "^2.0.0-beta.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "express-handlebars": "^4.0.6",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.21",
    "nodemailer": "^6.4.10",
    "nodemailer-express-handlebars": "^4.0.0",
    "pg": "^8.2.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^5.21.13",
    "sequelize-cli": "^5.5.1",
    "youch": "^2.0.10",
    "yup": "^0.29.1"

  \* Veja o arquivo <kbd>[package.json](./sources/website/package.json)</kbd>

## Rotas

- POST|GET        /sessions -> Rota para realizar login

- POST/GET        /restaurant -> Rota para cadastrar um restaurante

- POST/GET        /restaurant/table -> Rota para cadastrar mesas

- POST       /restaurant/employee -> Rota para cadastrar funcionario

- GET        /restaurant/:id/employee -> Rota para pegar funcionarios 

- GET             /restaurant/:idRestaurante -> Rota para pegar os dados de um restaurante

- POST|GET        /menu -> Rota para pegar/todas as comidas e cadastrar produtos/comida

- GET             /menu/categories/:category -> Rota para pegar o cardapio por categoria

- POST            /menu/categories/products -> Rota para cadastrar produto

- POST            /menu/categories -> Rota para cadastrar categoria

- POST|GET        /requests -> Rota para pedidos

- PUT|GET|DELETE  /requests/:idMesa -> Rota para pegar pedido da mesa

- PUT|GET|DELETE  /payments/:idMesa -> Rota para pegar o pagamento dessa mesa


## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[NVM](https://github.com/nvm-sh/nvm)</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link](https://classic.yarnpkg.com/en/docs/install/#debian-stable)</kbd>.

Após ter o **Node** instalado, instale as dependências do **ExpressJS**, utilizando os comandos:

```sh

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits). Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>


## **:books: REFERÊNCIAS**

- [ExpressJS](https://expressjs.com/en/api.html)
- [JavaScript](https://devdocs.io/javascript/)

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h2 align="center">:checkered_flag: Feito por <a href="https://www.linkedin.com/in/jeffesson-gomes-2b36911aa/">Jeffesson Gomes</a></h2>


<!-- Techs -->

[yup]: https://github.com/jquense/yup

[javascript]: https://devdocs.io/javascript/

[jsonwebtoken]: https://jwt.io/introduction/

[expressjs]: https://devdocs.io/express/

[bcryptjs]: https://openbase.io/js/bcryptjs/documentation

[Sequelize]: https://sequelize.org/master/manual/getting-started.html

