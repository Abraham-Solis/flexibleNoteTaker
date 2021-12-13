const router = require('express').Router()
const path = require('path')
const fs = require('fs')

//Function for gettng Notes

router.get('/api/notes', (req, res) =>{
  fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf-8', (err,data) =>{
if (err) {console.log(err) }
res.json(JSON.parse(data))
  })
})