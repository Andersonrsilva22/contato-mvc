//importar o express
const express = require('express')

//importar o usuarioController
const UsuariosController = require('../controllers/usuariosController')

//criar o roteador
const router = express.Router()

//criar a rota do roteador
router.get('/registrar', UsuariosController.showRegistrar);
router.post('/usuarios', UsuariosController.store);
router.get('/login', UsuariosController.mostrarLogin);
router.post('/login', UsuariosController.login);


//exportar o roteador para uso externo
module.exports = router;
