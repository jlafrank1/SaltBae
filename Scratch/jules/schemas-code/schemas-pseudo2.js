// ---------- user.js
const mongoose = require('mongoose')

const userSchama = new mongoose.Schema ({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  // env: {
  //   details: TBD
  // },
  userName: {
    type: String,
    required: true
  },
  userTags: { // return to format later -- better here or with timer?
    tagArr: {[tag,tag,tag] // pseudocode
  },
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User


// ---------- timers.js
const mongoose = require('mongoose')
const timerPomo = 25 * (60 * 1000)
const timerLongBreak = 15 * (60 * 1000)
const timerShortBreak = 5 * (60 * 1000)
const timerSchema = new mongoose.Schema ({
  timertype: {
    [pomo, longbreak, shortbreak] // 25, 15, 5, arr selection of valid values
  },
  timerFinish: {
    type: Boolean // timer stopped=false, else=true
  },
  userTags: { // related to userschema usertags, likely pre-filled
    tagArr: {[tag,tag,tag] // pseudocode
  },
  timerInterview: {
    {
      helpful: {
        type: Boolean,
      },
      interrupted: {
        type: Boolean,
      },
      comments: {
        type: String,
      }
    }
  }
}, {timestamps: true})

const Timer = mongoose.model('Timer', timerSchema)
module.exports = Timer