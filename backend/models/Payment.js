// /backend/models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tenant',
    required: true,
  },
  leaseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lease',
  },
  datePaid: {
    type: Date,
    default: Date.now,
  },
  method: {
    type: String,
    enum: ['cash', 'mpesa', 'bank', 'other'],
    default: 'cash',
  },
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
