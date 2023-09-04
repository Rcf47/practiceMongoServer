const Quest = require("../models/quest.js")

const handleError = (res, error) => {
  res.status(500).json({ error })
}
