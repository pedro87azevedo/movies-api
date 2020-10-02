const express = require('express')
const route = express.Router()
const Filme = require('../controllers/filme.controllers')

route.post('/criar', Filme.criarFilme)
route.get('/listarTodos', Filme.buscarTodosOsFilmes)
route.get('/listarUm/:nomeFilme', Filme.buscarUmFilmePeloNome)
route.put('/atualizarUm/:nome', Filme.atualizarUmFilme)
route.delete('/apagarUm/:nome', Filme.apagarUmFilme)
route.get('/validarNomeFilme', Filme.validarNomeFilme)


module.exports = route