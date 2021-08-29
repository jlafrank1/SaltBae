const express = require('express');
const router = express.Router();
const Projects = require('../models/projects.js')

//ROUTES

// Index route
router.get('/', (req,res)=>{
    Projects.find({}, (err, allProjects)=>{
        if(err){
            res.send(err)
        }else {
            res.render('index.ejs', {projects: allProjects})
        }
    })
})

// New route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// Post route
router.post('/', (req,res) => {
  Projects.create(req.body, (err, newProject)=>{
    if (err) {
      console.log(err);
    } else {
      res.redirect('/saltbae')
    }
  })
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
