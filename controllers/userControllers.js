  const {Users} = require("../models/busModels")

  const addUser = async (req, res) => {
    try {
      const { name, email } = req.body
      const user = await Users.create({
        name, email
      })
      res.status(200).send(`User with name ${name} has been created `)
    } catch (error) {
      console.error(error);
      res.status(500).send("Unable to create a user")
    }
  }

  const findAllUser = async (req, res) => {
  try {
    const user = await Users.findAll()
      res.status(200).json(user)
    } catch (error) {
      res.status(404).send("Unable to find users")
  }
  }

  module.exports = {
    addUser, findAllUser
  }