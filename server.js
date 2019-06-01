const express = require('express'); 
const mongoose = require('mongoose'); 

//Iniciando o App
const app = express();
app.use(express.json());

//Iniciando conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

//import do model  
require('./src/models/Product');

//Rotas
app.use("/api", require('./src/routes'))


app.listen(3000);