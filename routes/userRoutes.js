  const express = require("express")
  const router = express.Router()

  const { addUser, findAllUser } = require("../controllers/userControllers");



  router.post("/", addUser);
  router.get("/", findAllUser);



  module.exports = router