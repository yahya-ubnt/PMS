// models/Tenant.js
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  email: String,
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  },
  leaseStart: Date,
  leaseEnd: Date,
  rentAmount: Number,
  balance: {
    type: Number,
    default: 0,
  },
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
