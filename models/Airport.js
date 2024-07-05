// src/models/Airport.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  icao_code: String,
  iata_code: String,
  name: String,
  type: String,
  city_id: { type: Schema.Types.ObjectId, ref: "City" },
  country_id: { type: Schema.Types.ObjectId, ref: "Country" },
  continent_id: Number,
  website_url: String,
  created_at: Date,
  updated_at: Date,
  latitude_deg: Number,
  longitude_deg: Number,
  elevation_ft: Number,
  wikipedia_link: String,
});

module.exports = mongoose.model("Airport", AirportSchema);
