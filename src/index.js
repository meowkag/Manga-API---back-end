const express = require('express')

const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/test');

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.listen(port, () => {
    console.log('Ta funcionando poggers')
})