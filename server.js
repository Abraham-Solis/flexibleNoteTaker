const router = require('express').Router()
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(require('./routes/itemRoutes.js'))

app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})
 app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, 'public', 'index.html'))
 })

 //heroku port

const port = process.env.PORT || 4000;
app.listen(port);

//local hosting 

// app.listen(3000)