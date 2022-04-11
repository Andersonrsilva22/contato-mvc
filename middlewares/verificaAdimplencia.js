module.exports = (req, res , next) => {
    // importar o usuarios
    const usuarios = require('../database/usuarios.json');

    //capturar o usuario de id==req.usuario.id
    const usuario = usuarios.find(
        //"outro exemplo simplificado" const usuario = usuarios.find(u => u.id == uid);
        u => {
            if(u.id == req.usuario.id){
                return true;
            }else{
                return false;
            }
        }
    );
     // Verificar se o usuario é adimplente
    if(usuario.adimplente){
        // Caso adimplente: Pode ir adiante.
        next();
    } else {
        // Caso contrário, enviar uma mensagem de erro educada
        res.send("Favor entrar em contato com o nosso financeiro.")
    }
}