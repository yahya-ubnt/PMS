// backend/routes/index.js

const express = require('express');
const router = express.Router();

// Import dashboard routes
const dashboardRoutes = require('../modules/dashboard/routes/dashboardRoutes');

// Use dashboard routes with prefix
router.use('/dashboard', dashboardRoutes);

module.exports = router;
