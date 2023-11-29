const express = require('express')

const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://meowkag:<password>@cluster0.irnoouy.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.listen(port, () => {
    console.log('Ta funcionando poggers')
})