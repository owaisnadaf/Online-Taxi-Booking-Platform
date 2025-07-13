const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const dbConnect = require("./db/db");
dbConnect();

const cors = require("cors");
app.use(cors());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes")
const mapRoutes = require("./routes/mapsRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.use("/users", userRoutes);
app.use("/captains",captainRoutes)
app.use("/maps",mapRoutes)


module.exports = app;
