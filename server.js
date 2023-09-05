const express = require('express');
const mongoose = require('mongoose')
const questRouter = require('./routes/quests-routes.js')

const PORT = 3000;
const URL = 'mongodb://localhost:27017/questbox'

const app = express();

app.use(express.json())
app.use(questRouter)

mongoose
  .connect(URL)
  .then(() => { console.log('Connected to MongoDB') })
  .catch((err) => { `DB connection error: ${err}` })

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`listening port ${PORT}`)
})
