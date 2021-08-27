//DEPENDENCIES
const express = require('express');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db = mongoose.connection
const Projects = require('./models/projects.js')
const methodOverride = require('method-override');

//MONGOOSE CONNECT
mongoose.connect('mongodb://localhost:27017/saltbae', { useNewUrlParser: true});
db.once('open', ()=> {
    console.log('Connected to mongo');
});

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

//ROUTES

// Index route
app.get('/', (req, res) => {
    res.redirect("/saltbae")
})

app.get('/saltbae', (req,res)=>{
    Projects.find({}, (err, allProjects)=>{
        if(err){
            res.send(err)
        }else {
            res.render('index.ejs', {projects: allProjects})
        }
    })
})

// New route
app.get('/saltbae/new', (req, res) => {
  res.render('new.ejs')
})

// Post route
app.post('/saltbae',(req,res)=>{
  Projects.create(req.body, (err, newProject)=>{
    if (err) {
      console.log(err);
    } else {
      res.redirect('/saltbae') //redirect to new id of new route
    }
  })
})

// Show route
app.get('/saltbae/:id', (req, res)=> {
  let id = req.params.id
  Projects.findById(id, (err, foundProject)=>{
    if(err){
      res.send(err)
    } else{
      res.render('show.ejs', {project: foundProject})
    }
  })
})


// Delete route
app.delete('/saltbae/:id', (req, res) => {
    Projects.deleteOne({_id: req.params.id}, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/saltbae')
      }
    })
})

// Edit route
app.get('/saltbae/:id/edit', (req, res)=>{
  let id = req.params.id
  Projects.findById(id, (err, foundProject)=>{
    if (err) {
      res.send(err)
    } else {
      res.render('edit.ejs', {project: foundProject})
    }
  })
})

// Put route
app.put('/saltbae/:id', (req, res) => {
	projects[req.params.id] = req.body
  //needs work
	res.redirect('/saltbae');
})

app.listen(port, () => {
    console.log("App listening on port " + port)
})
