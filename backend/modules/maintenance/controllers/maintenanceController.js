// maintenanceController.js

exports.getMaintenanceRequests = async (req, res) => {
  try {
    const requests = [
      { id: 1, description: 'Leaking tap', status: 'Pending' },
      { id: 2, description: 'Broken window', status: 'Completed' }
    ];
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch maintenance requests' });
  }
};
