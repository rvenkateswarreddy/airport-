// src/models/Country.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: String,
  country_code_two: String,
  country_code_three: String,
  mobile_code: Number,
  continent_id: Number,
});

module.exports = mongoose.model("Country", CountrySchema);
