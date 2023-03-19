const router = require('express').Router();
const path = require('path');
const fs = require('fs');
//UUID used for creating random id for id in note object 
const { v4: uuidv4 } = require('uuid');
//database to store notes
const notes = require('./db.json');

router.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, '../db/db.json'));

    console.log('check get notes', req);
    //handles all the notes
    console.log(notes);
    res.json(notes);
});

//route uses a url param :id to match the id of user's specific note to view
router.get('/notes', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            res.json(notes[i]);
        }
    }
});

//creates a new note object with a unique id when user makes a new note
//adds it to the note array 
//pushes the new note array to the db.json file
router.post('/notes', (req, res) => {
    const someNewNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuidv4()
    }
    notes.push(someNewNote)
    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify(notes, null, 2)
    )
    res.json(notes);
});

//define route for handling delete request
//uses url parameter :id to match id of the note the user wants to delete
//server response by removing id'd note from array & writing updated note array to updated db.json file
router.delete('/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify(notes, null, 2)
    )
    res.json(notes);
});

module.exports = router;