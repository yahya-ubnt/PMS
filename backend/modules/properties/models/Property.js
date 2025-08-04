// backend/modules/properties/models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  status: String,
});

module.exports = mongoose.models.Property || mongoose.model("Property", propertySchema);
