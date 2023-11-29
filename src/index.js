const express = require('express')

const mongoose = require('mongoose')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.listen(port, () => {
    console.log('Ta funcionando poggers')
})