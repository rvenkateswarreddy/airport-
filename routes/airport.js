// src/routes/airport.js
const express = require("express");
const router = express.Router();
const airportController = require("../controllers/airportController");

const Airport = require("../models/Airport");
const City = require("../models/City");
const Country = require("../models/Country");

// const airportController = require("../controllers/airportController");
const cityController = require("../controllers/cityController");
const countryController = require("../controllers/countryController");

// Route to get an airport by its IATA code
// router.get("/airport", async (req, res) => {
//   try {
//     const { iata_code } = req.query;
//     const airport = await Airport.findOne({ iata_code }).populate(
//       "city_id country_id"
//     );
//     if (!airport) {
//       return res.status(404).json({ message: "Airport not found" });
//     }
//     res.json(airport);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.get("/airport", airportController.getAllAirports);
router.post("/airport", airportController.createAirport);

// Route to get a city by its name
router.get("/city", async (req, res) => {
  try {
    const { name } = req.query;
    const city = await City.findOne({ name }).populate("country_id");
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a country by its name
router.get("/country", async (req, res) => {
  try {
    const { name } = req.query;
    const country = await Country.findOne({ name });
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/city", cityController.createCity);
router.post("/country", countryController.createCountry);

router.get("/airport", airportController.getAirportByIataCode);

module.exports = router;
