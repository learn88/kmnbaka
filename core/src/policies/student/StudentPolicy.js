const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = {
      name: Joi.string().min(3).max(30).required(),
      father_name: Joi.string().min(3).max(30).required(),
      dob: Joi.string().min(3).max(30).required(),
      school_id: Joi.string().required()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name error.'
          })
          break;
        case 'father_name':
          res.status(400).send({
            error: 'You must provide a valid father_name error'
          })
        case 'dob':
          res.status(400).send({
            error: 'You must provide a valid dob error'
          })
        case 'school_id':
          res.status(400).send({
            error: `This school_id provided failed to match the following rule.
              <br>
              1.It must contain ONLY the following balar balar balar ...
            `
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
