const User = require("../models/User");
const jwt = require('jsonwebtoken');
const config = require('../config/settings.conf');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
}

module.exports = {
    async index (req, res) {
        try {
            const users = await User.find()
            res.send({
                users: users
            })
        } catch (err) {
            res.status(500).send({
                error: "This error is all users"
            })
        }
    },
    async show (req, res) {
      try {
          const user = await User.findById(res.body)
          res.send({
              user: user
          })
      } catch (err) {
          res.status(500).send({
              error: "This error is all users"
          })
      }
    },
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send({
                user: user,
                token: jwtSignUser(user.toJSON())
            })
        } catch (err) {
          res.status(400).send({
            success: false,
            error: 'This email account is already in use.'
          })
        }
    },
    async login(req, res) {
      try {
        const { email, password } = req.body
        const user = await User.findOne({
          email: email
        }, function(err, user) {
          if (err) throw err
  
          if (!user) {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. User not found.'
            })
          } else {
            // check if password matches
            user.comparePassword(password, function(err, isMatch) {
              if (isMatch && !err) {
                // if user is found and password is right create a token
                // return the information including token as JSON
                res.send({
                  user: user,
                  token: jwtSignUser(user.toJSON())
                })
              } else {
                res.status(401).send({
                  success: false,
                  msg: 'Authentication failed. Wrong password.'
                })
              }
            })
          }
        })
      } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to log in'
        })
      }
    },
    async put (req, res) {
      try {
        const user = await User.update({ _id: req.params.userID }, req.body)
        res.send({
          user: user
        })
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to update the User'
        })
      }
    },
    async remove (req, res) {
      try {
        await user.remove({ _id: req.params.userID}, req.body)
        res.send("success deleted")
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to delete the User'
        })
      }
    }
}