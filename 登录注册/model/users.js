let mongoose = require('mongoose')



let Schema = mongoose.Schema

let stuSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: "Y"
  }
})

let stuModel = mongoose.model('users', stuSchema)

module.exports = stuModel
