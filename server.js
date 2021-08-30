//DEPENDENCIES
require('dotenv').config()
const session = require('express-session');
const express = require('express');
const app = express()
const port = process.env.port || 3000
const mongoose = require('mongoose');
const db = mongoose.connection
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const projectsController = require('./controllers/projects.js');
const path = require('path');

//MONGOOSE CONNECT
mongoose.connect(process.env.MONGODBURI, { useNewUrlParser: true}, { useUnifiedTopology: true });

db.once('open', ()=> {
    console.log('Connected to mongo');
});

//MIDDLEWARE
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(methodOverride('_method'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/saltbae', projectsController);
app.listen(port, () => {
    console.log("App listening on port " + port)
})
