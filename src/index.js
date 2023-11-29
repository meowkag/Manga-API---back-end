const express = require('express')

const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3005

const Manga = mongoose.model('Manga', { 
    titulo: String, 
    autor: String,
    genero: String,
    volumes: Number,
});    

app.get('/', async (req, res) => {
    const manga = await Manga.find()
    return res.send(manga)
})

app.delete("/:id", async(req, res) => {
    const manga = await Manga.findByIdAndDelete(req.params.id)
    return res.send(manga)
})

app.put("/:id", async (req, res) => {
    const manga = await Manga.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero,
        volumes: req.body.volumes,
    }, {
        new: true
    })
    return res.send(manga)
})

app.post("/", async (req, res) => {
    const manga = new Manga({
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero,
        volumes: req.body.volumes,
    })
    await manga.save()
    return res.send(manga)
})


mongoose.connect(`mongodb+srv://meowkag:VqLhehDgAHUj1n9M@cluster0.irnoouy.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Banco de Dados conectado')
    app.listen(port, ()=> {
        console.log(`Servidor rodando`)
    });
}).catch((error) => {
    console.log(error)
})