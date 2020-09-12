const {Schema, model} = require('mongoose')

const atoresSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    imagem: {
        type: String,
        trim: true
    },
    idade: {
        type: Number,
        required: false        
    },
    localidade: [{
        cidade: {
            type: String,
            required: false,
            trim:true
        },
        estado: {
            type: String, 
            required:false,
            trim: true
        },
        cep: {
            type: Number,
            trim:true
        }
    }],

    filmes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'filmeschema'

  }]
},
{
    timestamps: true,
    versionkey: false
})
   

  


module.exports = model('atoresSchema', atoresSchema)
