const express = require('express')
const Router = express.Router()

// Controllers Import
const UserController = require('../app/controllers/Users')
//Controllers Path

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
