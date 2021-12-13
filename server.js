const express = require('express')
const req = require('express')

const path = reqiuire('path')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(require('./routes/itemRoutes.js'))

app.get('/notes', req, res =>{
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})
 app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, 'public', 'index.html'))
 })


app.listen(3000)