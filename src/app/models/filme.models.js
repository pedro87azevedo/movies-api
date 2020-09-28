const {Schema, model} = require('mongoose')

const FilmeSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    imagem: {
        type: String,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: false,
        trim: true
    },
    sinopse: {
        type: String,
        required: false,
        trim: true
    },
    ano: {
        type: Number,
        required: false,
    },
    classificacao_indicativa: {
        type: String,
        required: false,
    },
    ator: {
        type: Schema.Types.ObjectId,
        ref: 'atoresSchema', 
        required: true
    }
},
    {
        timestamps: true,
        versionkey: false
    }
)
module.exports = model('Filme', FilmeSchema)