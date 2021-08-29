//DEPENDENCIES
const express = require('express');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db = mongoose.connection
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const projectsController = require('./controllers/projects.js');

//MONGOOSE CONNECT
mongoose.connect('mongodb://localhost:27017/saltbae', { useNewUrlParser: true}, { useUnifiedTopology: true });

db.once('open', ()=> {
    console.log('Connected to mongo');
});

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/saltbae', projectsController);
app.listen(port, () => {
    console.log("App listening on port " + port)
})
