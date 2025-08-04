const Tenant = require('../models/Tenant');

// @desc    Get all tenants
// @route   GET /api/tenants
exports.getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find().populate('unitAssigned');
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tenants', error: error.message });
  }
};

// @desc    Create a new tenant
// @route   POST /api/tenants
exports.createTenant = async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.status(201).json(tenant);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create tenant', error: error.message });
  }
};

// @desc    Get a single tenant by ID
// @route   GET /api/tenants/:id
exports.getTenantById = async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id).populate('unitAssigned');
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }
    res.status(200).json(tenant);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tenant', error: error.message });
  }
};

// @desc    Update a tenant
// @route   PUT /api/tenants/:id
exports.updateTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }
    res.status(200).json(tenant);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update tenant', error: error.message });
  }
};

// @desc    Delete a tenant
// @route   DELETE /api/tenants/:id
exports.deleteTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByIdAndDelete(req.params.id);
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }
    res.status(200).json({ message: 'Tenant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete tenant', error: error.message });
  }
};