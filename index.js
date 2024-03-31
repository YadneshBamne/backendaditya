require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Yadneshdotcom') 
})

app.get('/login', (req, res) => {
    res.send('<h1> Please Login at my wesbite at yadnesh</h1>')
})

app.get('/Aditya', (req, res) => {
    res.send('<h1>Aditya  is the best developer ever made by God himself <3</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})