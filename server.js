const express = require('express')
const req = require('express')

const path = reqiuire('path')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(require('./public/assets/js/index.js'))


app.listen(3000)