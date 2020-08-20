const express = require('express')
const route = express.Router()
const filme = require('./../controllers/filmes.controllers')

route.post('criar', Filme.criarFilme)

module.exports = route