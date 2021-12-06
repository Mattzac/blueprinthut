const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema({
  name: String,
  age: Number,
  skills: [],
  imgsrc: String
});

module.exports = mongoose.model( "Characters" , CharacterSchema )
