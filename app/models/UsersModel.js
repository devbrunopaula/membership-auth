const db = require('../../config/dbConfig')

const all = async () => {
  return await db('users')
}

module.exports = {
  all,
}
