# restAPP---back


#Rotas

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
