<img src="https://github.com/GLaveli/eyemobile/blob/main/gitAssets/eyemobile.fw.png" width="150px" height="120px" align="left"/>

# Back-end Node.js
Teste Eyemobile

------------------------------------------
# Requisitos para a instalação:

* Node.js v14.+
* MySQL v8.+

------------------------------------------

# Instalação Back-end:

Execute na pasta raiz do projeto o comando (CMD):
```
 npm install
```

Aguarde a instalação e em seguida execute o comando:
```
 npm start
```
Será exibido uma mensagem em caso de sucesso, basta acessar a URL: 
```
 http://localhost:3333
```

# Instalação Front-end:

Para clonar o frontend basta clicar [aqui](https://github.com/GLaveli/eyemobile-frontend) ou se preferir pode utilizar a propria interface através das rotas

------------------------------------------
# Utilização de rotas:

```
GET, POST -> /products
```

O body deve conter os seguintes parametros para criar/editar um produto

{
"name":"produto 01",
"price": 19.90
}

```
PUT, DELETE -> /products/:id
```

A URL deve conter o ID do produto para deletar/alterar
http://localhost:3333/products/12

```
POST, GET, PATCH, DELETE -> /produtos
```
------------------------------------------
