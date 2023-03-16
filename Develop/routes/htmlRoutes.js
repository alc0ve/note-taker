//route for pages?
const router = require('express').Router();
const path = require('path');

//show homepage first
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;