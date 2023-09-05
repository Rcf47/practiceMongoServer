const express = require('express')
const { getQuests, getQuest, deleteQuests, addQuest, updateQuest } = require("../controllers/quest-controller.js")

const router = express.Router()

router.get('/quests', getQuests)
router.get('/quests/:id', getQuest)
router.delete('/quests/:id', deleteQuests)
router.post('/quests', addQuest)
router.patch('/quests/:id', updateQuest)

module.exports = router
