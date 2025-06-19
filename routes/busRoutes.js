const express = require("express")
const router = express.Router()
const { addBuses, getAvailableBuses } = require("../controllers/busController");





router.post("/", addBuses);
router.get("/available/:seats", getAvailableBuses);



module.exports = router