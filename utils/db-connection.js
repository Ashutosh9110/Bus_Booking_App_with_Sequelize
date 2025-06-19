const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("testdb", "root", "1234", {
  "host" : "localhost",
  dialect: "mysql"
})


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};


module.exports = { 
  sequelize, 
  connectDB 
}