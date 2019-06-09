const School = require('../models/School')

module.exports = {
  async index (req, res) {
    try {
      const schools = await School.find().sort({"date": -1})
      res.send({
        headers: req.headers,
        schools: schools
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Schools'
      })
    }
  },
  async show (req, res) {
    try {
      const school = await School.findById({ _id: req.params.schoolID })
      res.send({
        school: school
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Schools'
      })
    }
  },
  async post (req, res) {
    try {
      const school = await School.create(req.body)
      res.send({
        school: school
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the School'
      })
    }
  },
  async put (req, res) {
    try {
      const school = await School.update({ _id: req.params.schoolID }, req.body)
      res.send({
        school: school
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the School'
      })
    }
  },
  async remove (req, res) {
    try {
      await school.remove({ _id: req.params.schoolID })
      res.send("success deleted")
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the School'
      })
    }
  }
}
