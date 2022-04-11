//Importar o express
const express = require("express");

//importar middlewares
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

//importar contatoController
const ContatoController = require('../controllers/ContatosController');


//Cria o roteador
const router = express.Router();

// pede para o roteador definir uma rota: (método: get, endereço:)
router.get('/contatos', verificaSeLogado, verificaAdimplencia, ContatoController.listarContatos);
router.get('/contatos/:id', verificaSeLogado, verificaAdimplencia, ContatoController.capturarContato);

//Exportar o roteador
module.exports = router;