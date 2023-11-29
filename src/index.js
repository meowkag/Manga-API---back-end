const express = require('express')

const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3001

mongoose.connect('mongodb+srv://meowkag:VqLhehDgAHUj1n9M@cluster0.irnoouy.mongodb.net/?retryWrites=true&w=majority');

const Manga = mongoose.model('Manga', { 
    titulo: String, 
    autor: String,
    genero: String,
    volumes: Number,
});    

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.post("/", async (req, res) => {
    const manga = new Manga({
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero,
        volumes: req.body.volumes,
    })
    await manga.save()
    res.send(manga)
})

app.listen(port, () => {
    console.log('Ta funcionando poggers')
})