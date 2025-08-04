const mongoose = require('mongoose');

const utilitySchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  type: String,
  reading: Number,
  billingDate: Date
});

module.exports = mongoose.model('Utility', utilitySchema);
