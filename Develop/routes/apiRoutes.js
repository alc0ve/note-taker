const router = require('express').Router();
const path = require('path');
const fs = require('fs');
//UUID used for creating random id for id in note object 
const { v4: uuidv4 } = require('uuid');
//database to store notes
const notes = require('../db/db.json');

router.get('/notes', (res, req) => {
    console.log('check get notes', req);
    //handles all the notes
    res.json(notes)
});

module.exports = router;