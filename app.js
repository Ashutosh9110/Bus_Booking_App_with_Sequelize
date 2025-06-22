const express = require("express")
const busRoutes = require("./routes/busRoutes")
const userRoutes = require("./routes/userRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const { sequelize } = require("./utils/db-connection");

require("./models")

const app = express()

app.use(express.json())
// connectDB()

app.use("/users", userRoutes)
app.use("/buses", busRoutes)
app.use("/bookings", bookingRoutes)

// app.get("/", (req, res) => {
//   res.send("Hello world");
// })


sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running at 3000");
  })
}).catch((err) => {
  console.log(err);
})