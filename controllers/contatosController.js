//para testes , assumindo que o usuario logado seja o id=1
const uid = 1;

// iportando os conatos dos usuarios


module.exports ={
    listarContatos: (req,res) => {
        // iportando os conatos dos usuarios

        let contatos = require(`../database/contatos_${uid}.json`)

        //Enviando a view para o cliente
        res.render(
            'home.ejs',
            {
                contatos : contatos
            }
        );
    },

    capturarContato: (req, res)=>{
        // iportando os conatos dos usuarios
        let contatos = require(`../database/contatos_${uid}.json`)

        // Descobrir o ID que o usuário quer...
        let idDoContato = req.params.id;
        
        //Encontrar no array de contatos que tem o id desejado.
        let contato = contatos.find(
            (c) => {
                return c.id == idDoContato
                
            } 
        );

        // Retornar o contato para o cliente ou 
        //msg de erro se o contato nao existir
        if(contato === undefined){
            res.send({msg: "Contato inexistente"});
        }else{
            res.send(contato);
        }
    }
}

