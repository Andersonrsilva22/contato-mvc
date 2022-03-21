//Importar o express
const express = require("express");

//importar contatoController
const ContatoController = require('../controllers/ContatoController');
const contatosController = require("../controllers/contatosController");

//Cria o roteador
const router = express.Router();

// pede para o roteador definir uma rota: (método: get, endereço:)
router.get('/contatos', contatosController.listarContatos);

//Exportar o roteador
module.exports = router;