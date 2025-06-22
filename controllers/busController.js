const {Buses} = require("../models/busModels")
const { Op } = require("sequelize")

const addBuses = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats  } = req.body

    if (!totalSeats || !availableSeats || !busNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBus = await Buses.create({
      busNumber, totalSeats, availableSeats
    })  
    res.status(201).json(newBus)
  } catch (error) {
    res.status(500).json({ error: "Unable to add a bus", details : error.message })
  }
}

const getAvailableBuses = async (req, res) => {
  try {
    const minSeats = parseInt(req.params.seats);

    if (isNaN(minSeats)) {
      return res.status(400).json({ message: "Invalid seat number" });
    }

    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: minSeats
        }
      }
    });

    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch buses", details: error.message });
  }
};


module.exports = { addBuses, getAvailableBuses };