// maintenanceRoutes.js

const express = require('express');
const router = express.Router();
const { getMaintenanceRequests } = require('../controllers/maintenanceController');

router.get('/', getMaintenanceRequests);

module.exports = router;
