const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    unique: true
  },
  timer: {
    type: Number,
    default: 25,
    required: true
  },
}, {timestamps: true})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
