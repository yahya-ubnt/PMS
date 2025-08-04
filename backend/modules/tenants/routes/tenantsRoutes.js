const express = require('express');
const router = express.Router();
const {
  getAllTenants,
  createTenant,
  getTenantById,
  updateTenant,
  deleteTenant,
} = require('../controllers/tenantsController');

router.get('/', getAllTenants);
router.post('/', createTenant);
router.get('/:id', getTenantById);
router.put('/:id', updateTenant);
router.delete('/:id', deleteTenant);

module.exports = router;