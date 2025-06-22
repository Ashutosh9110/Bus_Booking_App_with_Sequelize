    const express = require("express")
    const router = express.Router()

    const { addUser, findAllUser } = require("../controllers/userControllers");



    router.post("/addUser", addUser);
    router.get("/findAllUser", findAllUser);



    module.exports = router