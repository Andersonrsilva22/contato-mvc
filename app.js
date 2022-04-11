// Importar dependencias
const express = require('express');
const session = require('express-session');

//importar os roteadores
const UsuariosRouter = require('./routes/UsuariosRouter');
const ContatosRouter = require('./routes/ContatosRouter');

//importar os middlewares dos
const marcaEntradaDeRequisicao = require('./middlewares/marcaEntradaDeRequisicao');

// Criar um servidor/aplicação com o express
const app = express();

//configurar o EJS como seu template Engine
app.set('view engine', 'ejs');

//Configura o req do body para conter as informações digitadas pelo usuário no formulário
app.use(express.urlencoded({extended: false }));

//configurando as pasta public para arquivos estaticos
app.use(express.static('public'));

// configurando o uso da session
app.use(session({
    secret:"segredo",
    resave: false,
    saveUninitialized: false
}));

//Aplicando middlewares globais
app.use(marcaEntradaDeRequisicao);


// Criar rota get no endereço '/' para responder requisição com msg "olá"
app.get('/', (req, res)=>{
    res.send("Olá");
});

//usando os roteadores
app.use('/',UsuariosRouter);
app.use('/',ContatosRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, ()=>{console.log("Aplicação escutando a porta 3000")} );
