// propertyGroupingRoutes.js

const express = require('express');
const router = express.Router();
const { getPropertyGroups } = require('../controllers/propertyGroupingController');

router.get('/', getPropertyGroups);

module.exports = router;
