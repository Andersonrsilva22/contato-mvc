//importar o express
const express = require('express')

//importar o usuarioController
const UsuariosController = require('../controllers/usuariosController')

//criar o roteador
const router = express.Router()

//criar a rota do roteador
router.get('/registrar', UsuariosController.showRegistrar);
//exportar o roteador para uso externo
module.exports = router;
