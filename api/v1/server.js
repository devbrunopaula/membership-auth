const express = require('express')
const server = express()
const routes = require('../../config/routes')
const morgan = require('morgan')

server.use(express.json())

// Router Path
server.use(morgan('tiny'))
server.use('/api/v1', routes)

module.exports = server
