const  express = require('express');
const routes = express.Router(); 

const ProductController = require('./controller/ProductController'); 

//rotas da API
routes.get('/products',ProductController.index);
routes.get('/products/:id',ProductController.getProd);
routes.post('/products',ProductController.create);
routes.put('/products/:id',ProductController.update);
routes.delete('/products/:id',ProductController.remove);

module.exports = routes; 