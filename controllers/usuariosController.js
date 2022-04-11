const bcrypt = require('bcryptjs');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');


module.exports= {
    showRegistrar:(req,res)=>{
        res.render('registro.ejs');
    },
    store:(req,res) =>{
        //Capturar as informações que o usuario digitou
        let {nome, email, senha} = req.body;

        //importar o array de usuarios dados
        let usuarios = require('../database/usuarios.json');

        //Determinar o novo idNovo do usuario
        let idNovo = usuarios[usuarios.length -1].id + 1;

        //criar a senha criptografada
        let senhaCriptografada = bcrypt.hashSync(senha, 10);
        
        //Criar um objeto com os dados do usuário
        let usuario = {
        "id": idNovo,
        "nome":nome,
        "email":email,
        "senha":senhaCriptografada
        }

        //adicionar o novo usuario a este array
        usuarios.push(usuario);

        //Salvar este array no arquivo usuarios.json
        fs.writeFileSync(path.join(__dirname,'/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));
        
        //Direcionando o usuario para a rota get
        res.redirect('/contatos');
    },

    mostrarLogin:(req, res) => {
        res.render('login.ejs');
    },

    login:(req,res) =>{
        //Extrair o login e a senha digitadas pelo usuário
        let{email, senha} = req.body;

        // carregar o array de usuarios.
        const usuarios = require('../database/usuarios.json')

        //Verificar se o email existe e se a senha deste email confere.
        let usuario = usuarios.find(
            //Jeito simplificado.
            u =>  (u.email == email && bcrypt.compareSync(senha, u.senha))
            
            //jeito tradicional
            /*u => {
                if(u.email == email && bcrypt.compareSync(senha, u.senha)){
                    return true;
                }else{
                    return false;
                }
            }*/
        );

        //se o usuario nao for encontardo ou se a senha for invalida, 
        // mandar view de login com erro
            if(usuario === undefined){
                res.render('login.ejs',{erro:1,email,senha});
            }else{
                //se usuario ok: - setar session do usuário.
                req.session.usuario = usuario;

                // E redirecionar o usuario para a tela que lista contatos.
                res.redirect("/contatos");
            }
    }
}