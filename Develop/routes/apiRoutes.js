const router = require('express').Router();
const path = require('path');
//UUID used for creating random id for id in note object 
const { v4: uuidv4 } = require('uuid');
//database to store notes
const notes = require('../db/db.json');

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  


module.exports = router;