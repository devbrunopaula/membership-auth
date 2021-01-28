const UsersModel = require('../models/AuthModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

const register = async (req, res) => {
  let {email, password, first_name, last_name, membership_type} = req.body
  password = bcrypt.hashSync(password, 13)
  email = email.toLocaleLowerCase()

  const user = {
    email,
    password,
    first_name,
    last_name,
    membership_type,
  }

  try {
    const [newUserId] = await UsersModel.create(user)

    return res.status(201).json({
      id: newUserId,
      email,
      first_name,
      last_name,
      membership_type,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json('Something Went Wrong...')
  }
}

const login = async (req, res) => {
  res.send('test')
}

module.exports = {
  register,
  login,
}
