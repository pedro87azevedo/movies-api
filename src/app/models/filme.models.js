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
    ano: {
        type: Number,
        required: false,
    },
    maior18: {
        type: Boolean,
        required: false,
    }
},
    {
        timestamps: true,
        versionkey: false
    }
)
module.exports = model('filmeschema', FilmeSchema)