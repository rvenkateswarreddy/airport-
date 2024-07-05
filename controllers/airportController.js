// src/controllers/airportController.js

const Airport = require("../models/Airport");
const City = require("../models/City");
const Country = require("../models/Country");

exports.getAirportByIataCode = async (req, res) => {
  const { iata_code } = req.query;
  console.log(iata_code);
  try {
    const airport = await Airport.findOne({ iata_code });
    console.log(airport);
    if (!airport) {
      return res.status(404).json({ message: "Null, Airport not found" });
    }

    const city = await City.findById(airport.city_id);
    const country = await Country.findById(airport.country_id);

    res.json({
      airport: {
        id: airport._id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: city
            ? {
                name: city.name,
                country_id: city.country_id,
                is_active: city.is_active,
                lat: city.lat,
                long: city.long,
              }
            : null,
          country: country
            ? {
                name: country.name,
                country_code_two: country.country_code_two,
                country_code_three: country.country_code_three,
                mobile_code: country.mobile_code,
                continent_id: country.continent_id,
              }
            : null,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.createAirport = async (req, res) => {
  const {
    icao_code,
    iata_code,
    name,
    type,
    city_id,
    country_id,
    continent_id,
    website_url,
    created_at,
    updated_at,
    latitude_deg,
    longitude_deg,
    elevation_ft,
    wikipedia_link,
    // Add other necessary fields
  } = req.body;

  try {
    // Check if the city exists
    const city = await City.findById(city_id);
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    // Create new airport record
    const airport = new Airport({
      icao_code,
      iata_code,
      name,
      type,
      city_id,
      country_id,
      continent_id,
      website_url,
      created_at,
      updated_at,
      latitude_deg,
      longitude_deg,
      elevation_ft,
      wikipedia_link,
    });

    await airport.save();

    res.status(201).json({ message: "Airport created successfully", airport });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllAirports = async (req, res) => {
  try {
    const airports = await Airport.find()
      .populate("city_id")
      .populate("country_id");

    res.json({ airports });
  } catch (error) {
    console.error("Error fetching airports:", error);
    res.status(500).json({ error: "Server error" });
  }
};
