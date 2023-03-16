const express = require('express');
const path = require('path');
const fs = require('fs');
//html routes for display
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
//instantiate the app
const app = express();

//Use static server to serve the website
app.use(express.static('public'));

//listening on port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
