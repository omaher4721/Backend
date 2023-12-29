const express = require('express')
require('dotenv').config()
// import { Express } from 'express' --- >Mostly used 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('om.com')
})
app.get('/login', (req, res) => {
  res.send('<h1>please login at cahi aur code</h1>')
})
app.get('/youtube', (req, res) => {
  res.send('<h1>welcome to youtube <h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})