const router = require('express').Router();
const path = require('path');
//UUID used for creating random id for id in note object 
const { v4: uuidv4 } = require('uuid');
//database to store notes
const notes = require('../db/db.json');



module.exports = router;