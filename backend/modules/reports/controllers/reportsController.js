// reportsController.js

exports.getReports = async (req, res) => {
  try {
    const reports = [
      { id: 1, name: 'Monthly Rent Report' },
      { id: 2, name: 'Occupancy Report' }
    ];
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
};
