const express = require('express');
const mongoose = require('mongoose')

const PORT = 3000;
const URL = 'mongodb://localhost:27017/questbox'

const app = express();
app.use(express.json())

mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => { `DB connection error: ${err}` })

app.listen(PORT, (err) => {
  err ? console.err(err) : console.log(`listening ${PORT}`)
});
