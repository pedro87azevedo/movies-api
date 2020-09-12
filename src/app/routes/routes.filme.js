const express = require('express')
const route = express.Router()
const Filme = require('../controllers/filme.controllers')

route.post('/criar', Filme.criarFilme)
route.get('/visualizarTodos', Filme.buscarTodosOsFilmes)
route.get('/visualizarUm/:nome', Filme.buscarUmFilme)
route.put('/atualizarUm/:nome', Filme.atualizarUmFilme)
route.delete('/apagarUm/:nome', Filme.apagarUmFilme)


module.exports = route