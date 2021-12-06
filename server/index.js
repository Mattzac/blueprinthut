//import lib
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use( bodyParser.json() )
require("dotenv/config");



//importing routes
const namegenRoute = require("./routes/namegen");
const charactersRoute = require("./routes/characters");

const port = 5000;

//connecting to mongodb
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to mongodb");
});

app.use(
  cors({
    origin: "*",
  })
);
app.use("/images", express.static("assets"));

//router middleware
app.use("/namegen", namegenRoute);
app.use("/characters", charactersRoute);

//default responea
app.get("/", (req, res) => {
  res.send("Alive");
});

app.listen(port, () => {
  console.log(`express app listening at port ${port}`);
});
