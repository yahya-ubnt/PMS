// utilitiesRoutes.js

const express = require('express');
const router = express.Router();
const { getUtilities } = require('../controllers/utilitiesController');

router.get('/', getUtilities);

module.exports = router;
