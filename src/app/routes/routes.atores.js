const express = require('express')
const route = express.Router()
const Atores = require('../controllers/ator.controllers')


route.post('/criar', Atores.criarAtores)
route.get('/visualizarTodos', Atores.visualizarAtores)
route.get('/visualizarUm/:nome', Atores.visualizarUmAtor)
route.put('/atualizarUm/:nome', Atores.atualizarUmAtor)
route.delete('/apagarUm/:nome', Atores.apagarUmAtor)



module.exports = route