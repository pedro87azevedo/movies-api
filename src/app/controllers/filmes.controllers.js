const filmeschema = require('./../models/filmes.models')

/**definir campos de busca
 * funçao para definir quais campos devem ser buscados ao realizar um find no Banco de Dados
 * O parametro campos é obrigatorio
 * @param {*} campos 
 */
function definirCamposDeBusca(campos){
    if (campos == 'nome18') {
        return { nome: 1, maior18: 1 }
    }else if (campos == 'nome'){
        return { nome: 1}
    }else {
        return null
    }
}

class Filme {

    //Medoto para inserir um dado no Banco de Dados
    criarFilme(req, res){
        const body = req.body

        filmeschema.create(body, (err, data) => {
            if(err){
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else{
                res.status(201).send({ message: "Filme criado com sucesso no Banco de Dados", filme: data })
            }
        })
    }

    /* Método para visualizar todos os dados do banco de dados, utilizando Query Params para 
    definir o valor a ser passado na funçao para definir os campos que devem ser buscados */
    visualizarFilmes(req, res){
        const campos = req.query.campos
        
        filmeschema.find({}, definirCamposDeBusca(campos), (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else {
                res.status(200).send({ message: "Todos os filmes foram recuperados com sucesso", filmes: data })
            }
        })
    }

    visualizarUmFilme(req, res){
        const nome = req.params.nome

        filmeschema.find({ nome: nome }, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else {
                res.status(200).send({ message: `Filme ${nome} foi recuperado com sucesso`, filme: data })
            }
        })
    }

    atualizarUmFilme(req, res) {
        const nome = req.params.nome

        filmeschema.updateOne({ nome: nome }, { $unset: req.body.nome},  (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else {
                res.status(200).send({ message: `Filme ${nome} foi atualizado com sucesso`, })
            }
        }) 
    }

}
module.exports = new Filme()