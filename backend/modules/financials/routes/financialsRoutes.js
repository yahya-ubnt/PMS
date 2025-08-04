// modules/financials/routes/financialRoutes.js
const express = require('express');
const router = express.Router();

router.get('/summary', (req, res) => {
  res.json({ message: "Financial summary data endpoint is working." });
});

module.exports = router;
