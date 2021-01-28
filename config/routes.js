const express = require('express')
const Router = express.Router()

// Validation Middleware
const Validator = require('../app/middlewares/validator/registerValidator')

// Controllers Import
const UserController = require('../app/controllers/Users')
const AuthController = require('../app/auth/Auth')
//Controllers Path
/*
    Path    = 'api/auth/register
    Method  = POST
    Body = email, password, membership_type, first_name, last_name
*/
Router.route('/auth/register').post(
  Validator.register(),
  AuthController.register
)

/*
    Path    = 'api/auth/login
    Method  = GET
    Body    = email, password
*/
Router.route('/auth/login').post(AuthController.login)

/*
    Path    = 'api/users
    Method  = GET
*/
Router.route('/users').get(UserController.index)

/*
    Path    = 'api/
    Method  = GET
*/
Router.get('/', (req, res, next) => {
  res.send(`Welcome To Auth Server ${process.env.npm_package_version}`)
})

module.exports = Router
