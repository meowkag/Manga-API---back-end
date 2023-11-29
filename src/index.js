const express = require('express')

const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://meowkag:<password>@cluster0.irnoouy.mongodb.net/?retryWrites=true&w=majority');

const Manga = mongoose.model('Manga', { 
    titulo: String, 
    autor: String,
    genero: String,
    capitulos: Int,
});    

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.post("/", (req, res) => {
    const manga = new Manga({
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero,
        capitulos: req.body.capitulos,
    })
})

app.listen(port, () => {
    console.log('Ta funcionando poggers')
})