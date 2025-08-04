// models/Property.js
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  units: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
    },
  ],
  owner: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
