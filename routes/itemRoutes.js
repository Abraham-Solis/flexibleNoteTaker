const router = require('express').Router()
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

//Function for gettng Notes

router.get('/api/notes', (req, res) =>{
  fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf-8', (err,data) =>{
if (err) {console.log(err) }
res.json(JSON.parse(data))
  })
})

//Function for posting notes

router.post('/api/notes', (req, res) =>{
  const note = req.body
  note.id = uuidv4();
  fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf-8' , (err,data) =>{
    if (err) { console.log(err)}
    const notes = JSON.parse(data)
    notes.push(note)
    fs.writeFile(path.join(__dirname, '..', 'db' , 'db.json'), JSON.stringify(notes), err => {
      if (err) {console.log(err)}
      res.sendStatus(200)
    })
  })
})


module.exports = router