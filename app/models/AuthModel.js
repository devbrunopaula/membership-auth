const db = require('../../config/dbConfig')

const create = async (user) => {
  return await db('users').insert(user).returning('id')
}

module.exports = {
  create,
}
