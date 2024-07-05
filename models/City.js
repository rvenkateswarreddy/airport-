// src/models/City.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  country_id: { type: Schema.Types.ObjectId, ref: "Country" },
  is_active: Boolean,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model("City", CitySchema);
