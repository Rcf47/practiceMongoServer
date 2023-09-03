const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questSchema = new Schema({
  "Quest name": {
    type: String,
    required: true
  },
  "Quest from": String,
  "Exp": Number,
  "Status": String
})

const Quest = mongoose.model('Quest', questSchema)

module.exports = Quest
