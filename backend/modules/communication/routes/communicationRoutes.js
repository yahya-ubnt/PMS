// communicationRoutes.js

const express = require('express');
const router = express.Router();
const { getMessages } = require('../controllers/communicationController');

router.get('/', getMessages);

module.exports = router;
