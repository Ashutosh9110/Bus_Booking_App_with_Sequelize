const { Sequelize, DataTypes } = require("sequelize")

const { sequelize } = require("../utils/db-connection")




const Users = sequelize.define("Users", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull: false
  },
  name: {
    type:DataTypes.STRING,
    allowNull:false
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps: false
})


const Buses = sequelize.define("Buses", {

  totalSeats: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  availableSeats: {
    type:DataTypes.INTEGER,
    allowNull:false
  }
}, {
  timestamps: false
})







module.exports = {
  Users,
  Buses
}