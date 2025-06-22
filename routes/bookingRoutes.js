const express = require("express")
const router = express.Router()
const { createBooking, getBookingsByUser, getBookingsByBus } = require("../controllers/bookingController");


router.post("/", createBooking);
router.get("/users/:id", getBookingsByUser);
router.get("/buses/:id", getBookingsByBus);



module.exports = router