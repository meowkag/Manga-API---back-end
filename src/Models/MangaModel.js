const mongoose = require('mongoose')

const MangaSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: [true, 'O campo nome é obrigatorio']
    } ,
  
    volume: Number,
    
    autor: {
      type: String,
      required:[true, 'O campo autor é obrigatorio']
    },

    tipo: {
      type: String,
      required:[true, 'O campo tipo é obrigatorio']
    },
    
    genero: {
      type: String,
      required:[true, 'O manga precisa requer no minimo 1 gênero']
    }

  })
  

module.exports = mongoose.model('mangas', MangaSchema)