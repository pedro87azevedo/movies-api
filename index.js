/**Importando dependencias necessárias para rodar minha API*/
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000

//Configurando Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json' }))

//configurando o cors
app.use(cors())

//configurando cabeçalhos de response padrão
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Oringin", "*")
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

//Configurando o endpoint / para responder un json com uma mensagem
app.get('/', (req, res) => {
    res.send({ message: `API ouvindo na porta ${PORT}` })
})

//Iniciando o servidor da API na porta configurada na variável de ambiente ou 3000
app.listen(PORT, () => console.log(`API ouvindo na porta ${PORT}`))
