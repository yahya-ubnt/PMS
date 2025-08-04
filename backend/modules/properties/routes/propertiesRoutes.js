// backend/modules/properties/routes/propertiesRoutes.js
const express = require("express");
const router = express.Router();
const {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertiesController");

router.get("/", getProperties);
router.post("/", addProperty);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;
