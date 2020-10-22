const { Schema, model } = require("mongoose");


const songSchema = new Schema(
  {
    title: String,
    artist: String,
    time: String,
  },
);

//DOG MODEL
const Song = model("Song", songSchema);

//EXPORT MODEL
module.exports = Song;
