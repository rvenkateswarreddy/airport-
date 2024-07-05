// controllers/cityController.js

const City = require("../models/City");

exports.createCity = async (req, res) => {
  const { name, country_id, is_active, lat, long } = req.body;

  try {
    // Create new city record
    const city = new City({
      name,
      country_id,
      is_active,
      lat,
      long,
    });

    await city.save();

    res.status(201).json({ message: "City created successfully", city });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
