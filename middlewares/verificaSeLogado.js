const verificaSeLogado = (req, res, next) => {
    if(req.session.usuario == undefined){
        res.redirect('login');
    }else{
        //Pendurar informações do usuário na requisição.
        req.usuario = req.session.usuario;

        //Passando para frente...(proximo middleware ou controller)
        next();
    }
}

module.exports = verificaSeLogado;