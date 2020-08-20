const express = require('express')
const route = express.Router()
const Filme = require('./../controllers/filmes.controllers')

route.post('criar', Filme.criarFilme)

module.exports = route