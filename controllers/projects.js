//DEPENDENCIES

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Projects = require('../models/projects.js')
const User = require('../models/User');

//ROUTES//

//INDEX

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

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

// NEW

//Project
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

//User
router.get('/register', (req, res) => {
  res.render('register.ejs')
})

// POST

// Project
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

//User
router.post('/register', ( req, res )=> {
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
            // req.session.currentUser = createdUser
            res.redirect('/saltbae/login')
        }
    }))
})

// Login
router.post('/login', ( req, res )=> {
    User.findOne({userId: req.body.userId}, ((err, foundUser)=> {
        if (err) {
            res.send(err)
        } else {
            if (!foundUser) {
                res.redirect('/saltbae/login')
            } else {
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    req.session.currentUser = foundUser
                    res.redirect('/saltbae')
                } else {
                    res.redirect('/saltbae/login')
                }
            }
        }
    }))
})

// SHOW
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

// DELETE
router.delete('/:id', (req, res) => {
    Projects.deleteOne({_id: req.params.id}, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/saltbae')
      }
    })
})

// EDIT / Exit interview
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

// PUT / Exit interview submit
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
