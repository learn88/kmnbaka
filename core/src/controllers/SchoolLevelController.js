const SchoolLevel = require('../models/SchoolLevel');

module.exports = {
  async index (req, res) {
    try {
      const schoolLevels = await SchoolLevel.find().sort({"date": -1})
      res.send({
        headers: req.headers,
        schoolLevels: schoolLevels
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the SchoolLevels'
      })
    }
  },
  async show (req, res) {
    try {
      const schoolLevel = await SchoolLevel.findById({ _id: req.params.schoolLevelID })
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the SchoolLevels'
      })
    }
  },
  async post (req, res) {
    try {
      const schoolLevel = await SchoolLevel.create(req.body)
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the SchoolLevel'
      })
    }
  },
  async put (req, res) {
    try {
      const schoolLevel = await SchoolLevel.update({ _id: req.params.schoolLevelID }, req.body)
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the SchoolLevel'
      })
    }
  },
  async remove (req, res) {
    try {
      await schoolLevel.remove({ _id: req.params.schoolLevelID })
      res.send("success deleted")
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the SchoolLevel'
      })
    }
  }
}
