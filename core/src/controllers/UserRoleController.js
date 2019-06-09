const UserRole = require('../models/UserRole')

module.exports = {
  async index (req, res) {
    try {
      const user_roles = await UserRole.find().sort({"date": -1})
      res.send({
        headers: req.headers,
        user_roles: user_roles
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the UserRoles'
      })
    }
  },
  async show (req, res) {
    try {
      const user_role = await UserRole.findById({ _id: req.params.userRoleID })
      res.send({
        user_role: user_role
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the UserRoles'
      })
    }
  },
  async post (req, res) {
    try {
      const user_role = await UserRole.create(req.body)
      res.send({
        user_role: user_role
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the UserRole'
      })
    }
  },
  async put (req, res) {
    try {
      const user_role = await UserRole.update({ _id: req.params.userRoleID }, req.body)
      res.send({
        user_role: user_role
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the UserRole'
      })
    }
  },
  async remove (req, res) {
    try {
      await user_role.remove({ _id: req.params.userRoleID })
      res.send("success deleted")
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the UserRole'
      })
    }
  }
}
