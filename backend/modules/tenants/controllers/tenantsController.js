// tenantsController.js

exports.getTenants = async (req, res) => {
  try {
    const tenants = [
      { id: 1, name: 'John Doe', unit: 'A-101' },
      { id: 2, name: 'Jane Smith', unit: 'B-202' }
    ];
    res.json(tenants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tenants' });
  }
};
