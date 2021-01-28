const Users = require('../models/UsersModel')

const index = async (req, res, next) => {
  const users = await Users.all()
  try {
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
}
