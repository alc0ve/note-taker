const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const apiRoutes = require('./Develop/routes/apiRoutes');


//Use static server to serve the website
// app.use(express.static(__dirname, 'public'));
// app.use(express.static(path.join(__dirname, 'public')));


// Middleware to parse
app.use(express.json());
//for parsing application
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listening on port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
