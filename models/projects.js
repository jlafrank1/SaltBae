const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    unique: true
  },
  time: {
    type: Number,
    default: 25
  },
}, {timestamps: true})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
