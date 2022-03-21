// Importar o express
const express = require('express');

//importar os roteadores
const ContatosRouter = require('./routes/ContatosRouter');

// Criar um servidor/aplicação com o express
const app = express();

// Criar rota get no endereço '/' para responder requisição com msg "olá"
app.get('/', (req, res)=>{
    res.send("Olá");
});

//usando os roteadores
app.use('/',ContatosRouter)

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, ()=>{console.log("Aplicação escutando a porta 3000")} );
