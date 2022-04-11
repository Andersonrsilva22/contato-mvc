
//criar biblioteca nativa para importar arquivo
const fs = require('fs');

//Criar e exportar uma função middlewares
//a função deve registrar a data e a hora em que a requisição foi realizada
module.exports = (re, res, next) => {
    console.log("Passei no middlewares marcaEntradaDeRequisicao");

    //capturar a string com a data e hora
    let dataHora = (new Date()).toISOString();

    //escrever em um arquivo (com quebra de linha)
    fs.writeFileSync('hora_acessado.txt', (dataHora + "\n"),{flag:'a+'});

    //executar a função next para direcionar a req para o proximo middleware
    next();

    console.log("Saindo do middleware...")

}