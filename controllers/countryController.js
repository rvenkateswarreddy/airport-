// controllers/countryController.js

const Country = require("../models/Country");

exports.createCountry = async (req, res) => {
  const {
    name,
    country_code_two,
    country_code_three,
    mobile_code,
    continent_id,
  } = req.body;

  try {
    // Create new country record
    const country = new Country({
      name,
      country_code_two,
      country_code_three,
      mobile_code,
      continent_id,
    });

    await country.save();

    res.status(201).json({ message: "Country created successfully", country });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
