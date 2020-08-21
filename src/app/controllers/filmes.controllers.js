const filmeschema = require('./../models/filmes.models')

class Filme {

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

    visualizarFilmes(req, res){
        filmeschema.find({}, (err, data) => {
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
}
module.exports = new Filme()