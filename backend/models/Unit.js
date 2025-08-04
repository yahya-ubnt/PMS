const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  unitNumber: String,
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  status: { type: String, enum: ['available', 'occupied'], default: 'available' }
});

module.exports = mongoose.model('Unit', unitSchema);
