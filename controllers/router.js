//DEPENDENCIES

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Projects = require('../models/projects.js')
const User = require('../models/user.js');

//ROUTES//

// Get routes

// Home

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

// Login

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

// Logout

router.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      res.send(err)
    } else {
      res.redirect('/saltbae/login');
    }
   });
})

// History
router.get('/history', (req,res)=>{
    let currentUser = req.session.currentUser

    if(!currentUser) {
      res.redirect('/saltbae/login');
    }
    if (currentUser) {
        Projects.find({user: currentUser._id}, (err, allProjects)=>{
            if(err){
                res.send(err)
            }else {
                res.render('history.ejs', {projects: allProjects, currentUser})
            }
        })
    } else {
        res.redirect('/saltbae/login')
    }
})

//Project
router.get('/new', (req, res) => {
  let currentUser = req.session.currentUser

  if(!currentUser) {
    res.redirect('/saltbae/login');
  }
  res.render('new.ejs', {currentUser})
})

//User
router.get('/register', (req, res) => {
  res.render('register.ejs')
})

// SHOW
router.get('/:id', (req, res)=> {
  let id = req.params.id
  let currentUser = req.session.currentUser

  if(!currentUser) {
    res.redirect('/saltbae/login');
  }

  Projects.findById(id, (err, foundProject)=>{
    if(err){
      res.send(err)
    } else{
      res.render('show.ejs', {project: foundProject, id: id, currentUser})
    }
  })
})

// Edit

router.get('/:id/edit', (req, res)=>{
  let id = req.params.id
  Projects.findById(id, (err, foundProject)=>{
    if (err) {
      res.send(err)
    } else {
      let currentUser = req.session.currentUser
      if(!currentUser) {
        res.redirect('/saltbae/login');
      }
      res.render('edit.ejs', {project: foundProject, currentUser })
    }
  })
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
      res.redirect('/saltbae/' + newProject._id)
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
                    // console.log('user found, setting session')
                    req.session.currentUser = foundUser
                    res.redirect('/saltbae')
                } else {
                    // console.log('no user found')
                    res.redirect('/saltbae/login')
                }
            }
        }
    }))
})


// DELETE
router.delete('/:id', (req, res) => {
    Projects.deleteOne({_id: req.params.id}, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/saltbae/history')
      }
    })
})

// PUT
router.put('/:id/interview', (req,res)=>{
  let id = req.params.id
  if (req.body.useful === 'on') {
    req.body.useful = true
  } else {
    req.body.useful = false
  }
  if (req.body.interrupted === 'on') {
    req.body.interrupted = true
  } else {
    req.body.interrupted = false
  }
    Projects.findByIdAndUpdate(id, {interview: req.body}, {new: true},(err)=>{
        if(err){
            res.send(err)
        }else {
            res.redirect('/saltbae/history')
        }
    })
})


module.exports = router;
