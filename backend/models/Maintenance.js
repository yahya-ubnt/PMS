const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  issue: String,
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
  reportedAt: { type: Date, default: Date.now },
  resolvedAt: Date
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
