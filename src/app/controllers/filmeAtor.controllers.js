const filmeSchema = require('./../models/filmes.models')
const atoresSchema = require('./../models/atores.models')

class filmeAtor {

    async novoFilmeAtor (req, res) {

        const { atorId } = req.params
        const novoFilme = filmeSchema (req.body)
        const ator = await atoresSchema.findById(atorId)
        await novoFilme.save()
        ator.filmes.push(novoFilme)
        await ator.save()

        res.status(200).send({ message: `Foi criado com sucesso o filme ${novoFilme.nome} com o ator ${ator.nome}`}).json(novoFilme)
    }   

    async pegarFilmeAtor(req, res) {
        const { atorId } = req.params
        const ator = await atoresSchema.findById(atorId).populate('filmes')
        res.status(200).json(ator)
    }
}
module.exports = new filmeAtor()