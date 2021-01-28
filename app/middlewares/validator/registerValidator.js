const Joi = require('joi')

class Validator {
  register = () => {
    return async (req, res, next) => {
      const schema = Joi.object({
        email: Joi.string().email().lowercase(),
        password: Joi.string().required().min(5),
      })

      try {
        const value = await schema.validateAsync({
          email: req.body.email,
          password: req.body.password,
        })

        next()
      } catch (error) {
        res.status(400).send(error.message)
      }
    }
  }
}
module.exports = new Validator()
