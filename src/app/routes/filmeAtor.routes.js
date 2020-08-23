const express = require('express')
const route = express.Router()
const FilmeAtor = require('./../controllers/filmeAtor.controllers')

route.post('/criar/:atorId', FilmeAtor.novoFilmeAtor)
route.get('/visualizarTodos/:atorId', FilmeAtor.pegarFilmeAtor)

module.exports = route