const Quest = require("../models/quest.js")

const handleError = (res, error) => {
  res.status(500).json({ error })
}

const getQuests = (req, res) => {
  Quest
    .find()
    .sort({ "Quest name": 1 })
    .then((quests) => {
      res
        .status(200)
        .json(quests)
    })
    .catch((err) => handleError(res, err))
}

const getQuest = (req, res) => {
  Quest
    .findById(req.params.id)
    .then((quest) => {
      res
        .status(200)
        .json(quest)
    })
    .catch((err) => handleError(res, err))
}

const deleteQuests = (req, res) => {
  Quest
    .findByIdAndDelete(req.params.id)
    .then((quest) => {
      res
        .status(200)
        .json(quest)
    })
    .catch((err) => handleError(req, err))
}

const addQuest = (req, res) => {
  const quest = new Quest(req.body)
  quest
    .save()
    .then((quest) => {
      res
        .status(201)
        .json(quest)
    })
    .catch((err) => handleError(res, err))

}
const updateQuest = (req, res) => {
  Quest
    .findByIdAndUpdate(req.params.id, req.body)
    .then((quest) => {
      res
        .status(200)
        .json(quest)
    })
    .catch((err) => handleError(res, err))
}

module.exports = {
  getQuests,
  getQuest,
  deleteQuests,
  addQuest,
  updateQuest
}
