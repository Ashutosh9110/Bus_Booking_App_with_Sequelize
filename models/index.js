const {Buses} = require("./busModels")
const {Users2} = require("./userModel")
const {Bookings} = require("./bookings")

// one to many


Users2.hasMany(Buses)
Buses.belongsTo(Users2)


// many to many

Users2.hasMany(Bookings, {foreignKey: "userId"});
Bookings.belongsTo(Users2, {foreignKey: "userId"});

Buses.hasMany(Bookings, { foreignKey: "busId" });
Bookings.belongsTo(Buses, { foreignKey: "busId" });



module.exports = {
  Buses, 
  Users2
}