const mongoose = require('mongoose');

const leaseSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  startDate: Date,
  endDate: Date,
  rentAmount: Number,
  status: { type: String, enum: ['active', 'terminated'], default: 'active' }
});

module.exports = mongoose.model('Lease', leaseSchema);
