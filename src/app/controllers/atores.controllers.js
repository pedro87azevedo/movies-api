const atoresSchema = require('./../models/atores.models')

/**definir campos de busca
 * funçao para definir quais campos devem ser buscados ao realizar um find no Banco de Dados
 * O parametro campos é obrigatorio
 * @param {*} campos 
 */
function definirCamposDeBusca(campos){
    if (campos == 'nomeIdade') {
        return { nome: 1, idade: 1 }
    }else if (campos == 'nome'){
        return { nome: 1}
    }else {
        return null
    }
}

class Atores {

    //Medoto para inserir um dado no Banco de Dados
    criarAtores(req, res){
        const body = req.body

        atoresSchema.create(body, (err, data) => {
            if(err){
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else{
                res.status(201).send({ message: "Atores criado com sucesso no Banco de Dados", atores: data })
            }
        })
    }

    /* Método para visualizar todos os dados do banco de dados, utilizando Query Params para 
    definir o valor a ser passado na funçao para definir os campos que devem ser buscados */
    visualizarAtores(req, res){
        const campos = req.query.campos
        
        atoresSchema.find({}, definirCamposDeBusca(campos), (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else {
                res.status(200).send({ message: "Todos os atores foram recuperados com sucesso", atores: data })
            }
        })
    }

    visualizarUmAtor(req, res){
        const nome = req.params.nome

        atoresSchema.find({ nome: nome }, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua requisição", error: err })
            }else {
                res.status(200).send({ message: `Atores ${nome} foi recuperado com sucesso`, atores: data })
            }
        })
    }

    atualizarUmAtor(req, res) {
        const nomeDoAtorParaSerAtualizado = req.params.nome
        const novoNomeDoAtor = req.body.nome

        atoresSchema.updateOne({ nome: nomeDoAtorParaSerAtualizado }, { $set: req.body },  (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar sua atualização", error: err })
            }else {
                if(data.n > 0) {
                    atoresSchema.findOne({ nome: novoNomeDoAtor }, (error, result) => {
                        if (err) {
                            res.status(500).send({ message: "Houve um erro ao processar sua busca no atores atualizado", error: err })
                } else {
                    res.status(200).send({ message: `Atores ${nomeDoAtorParaSerAtualizado} teve seu nome atualizado 
                    para ${novoNomeDoAtor}`, atores: result})
                        }
                })
                }                        
            }
        }) 
    }

    apagarUmAtor(req, res) {
        const nomeDoAtorParaSerApagado = req.params.nome

        atoresSchema.deleteOne({ nome: nomeDoAtorParaSerApagado}, (err) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao apagar um", error: err})
            }else {
                res.status(200).send({ message: `Os atores ${nomeDoAtorParaSerApagado} foram apagados com sucesso` })
            }
        })
    }

}
module.exports = new Atores()