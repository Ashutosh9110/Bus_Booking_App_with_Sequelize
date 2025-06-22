const {Sequelize, DataTypes} = require("sequelize")
const {sequelize} = require("../utils/db-connection") 



const Bookings = sequelize.define("bookings", {

  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  seatNumber: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  timestamps: false
}) 


module.exports = {
  Bookings
}