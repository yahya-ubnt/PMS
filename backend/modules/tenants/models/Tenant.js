
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  tenantName: { type: String, required: true },
  tenantID: { type: String, required: true, unique: true },
  unitAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: true,
  },
  leaseStartDate: { type: Date, required: true },
  leaseEndDate: { type: Date, required: true },
  rentAmount: { type: Number, required: true },
  paymentStatus: {
    type: String,
    enum: ['paid', 'due', 'late'],
    default: 'due',
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  leaseAgreement: { type: String }, // URL to the scanned lease agreement
  status: {
    type: String,
    enum: ['Active', 'Expired', 'Terminated'],
    default: 'Active',
  },
});

module.exports = mongoose.model('Tenant', tenantSchema);
