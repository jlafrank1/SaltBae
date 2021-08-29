const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User
