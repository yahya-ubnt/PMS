// tenantsRoutes.js

const express = require('express');
const router = express.Router();
const { getTenants } = require('../controllers/tenantsController');

router.get('/', getTenants);

module.exports = router;
