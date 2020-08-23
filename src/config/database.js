//Importando dependencias para configurar o banco de dados
const mongoose = require('mongoose')
require('dotenv').config()
let db = null

//Montando a URI do Bando de Dados
const URI_DATABASE = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

//Criando a conexão com o Banco de Dados
db = mongoose.connect(URI_DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Banco de Dados conectado com sucesso!'))
        .catch(error => console.log(`Problema ao conectar ao banco de Dados = ERRO : ${error}`))

//Exportando a conexão para outros módulos        
module.exports = { db }