const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
// const module = require('module');
const Projects = require('../models/projects.js')
const User = require('../models/User');

//ROUTES

// router.use(express.static('public', express.static(__dirname + '/public')));
// router.use('/public', express.static(path.join(__dirname, 'public')))
// Index route


router.get('/', (req,res)=>{
let currentUser = req.session.currentUser
if (currentUser) {
    Projects.find({user: currentUser._id}, (err, allProjects)=>{
        if(err){
            res.send(err)
        }else {
            res.render('index.ejs', {projects: allProjects, currentUser})
        }
    })
  } else {
    res.redirect('/saltbae/login')
  }
})

// New route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

// Post route
router.post('/', (req,res) => {
  let currentUser = req.session.currentUser._id
  req.body.user = currentUser
  Projects.create(req.body, (err, newProject)=>{
    if (err) {
      console.log(err);
    } else {
      res.redirect('/saltbae')
    }
  })
})

router.post('/user', ( req, res )=> {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    const userDbEntry = {
        userId: req.body.userId,
        userName: req.body.userName,
        password: passwordHash
    }

    User.create(userDbEntry, ((err, createdUser)=> {
        if (err) {
            res.send(err)
        } else {
            console.log(createdUser)
            req.session.currentUser = createdUser
            res.redirect('/saltbae')
        }
    }))

})

// Show route
router.get('/:id', (req, res)=> {
  let id = req.params.id
  Projects.findById(id, (err, foundProject)=>{
    if(err){
      res.send(err)
    } else{
      res.render('show.ejs', {project: foundProject, id: id})
    }
  })
})


// Delete route
router.delete('/:id', (req, res) => {
    Projects.deleteOne({_id: req.params.id}, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/saltbae')
      }
    })
})

// Edit route
router.get('/:id/edit', (req, res)=>{
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
router.put('/:id', (req,res)=>{
    Projects.findByIdAndUpdate(req.params.id, req.body, {new: true},(err)=>{
        if(err){
            res.send(err)
        }else {
            res.redirect('/saltbae')
        }
    })
})


module.exports = router;
