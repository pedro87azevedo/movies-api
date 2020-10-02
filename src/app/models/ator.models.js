const {Schema, model} = require('mongoose')

const atoresSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    imagem: {
        type: String,
        required: false,
        trim: true
    },
    idade: {
        type: Number,
        required: false        
    },
    nacionalidade: {
        type: String,
        required: false        
    },
    biografia: {
        type: String,
        required: true        
    },
    data_nascimento: {
        type: Date,
        required: false        
    },

    filmes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Filme'

  }]
},
{
    timestamps: true,
    versionkey: false
}) 


module.exports = model('atoresSchema', atoresSchema)
