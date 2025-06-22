  const { Sequelize, DataTypes } = require("sequelize")

  const { sequelize } = require("../utils/db-connection")


  const Users2 = sequelize.define("Users2", {
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
    timestamps: false,
    tableName: "Users2"
  })



  module.exports = {Users2}