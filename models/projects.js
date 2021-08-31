const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
  },
  timer: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  interview: {
      useful: {
        type: Boolean
      },
      interrupted: {
        type: Boolean
      },
      comments: {
        type: String
      }
  }
}, {timestamps: true})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
