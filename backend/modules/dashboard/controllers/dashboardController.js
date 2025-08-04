// backend/modules/dashboard/controllers/dashboardController.js

const Lease = require('../../../models/Lease');
const Payment = require('../../../models/Payment');
const Tenant = require('../../../models/Tenant');
const Property = require('../../../models/Property');

exports.getDashboardSummary = async (req, res) => {
  try {
    const totalPaymentsResult = await Payment.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const totalPayments = totalPaymentsResult[0]?.total || 0;
    const activeLeases = await Lease.countDocuments({ status: 'active' });
    const totalTenants = await Tenant.countDocuments();
    const totalProperties = await Property.countDocuments();

    res.json({
      totalPayments,
      activeLeases,
      totalTenants,
      totalProperties
    });
  } catch (err) {
    console.error('Dashboard summary error:', err);
    res.status(500).json({ error: 'Failed to fetch dashboard summary' });
  }
};
