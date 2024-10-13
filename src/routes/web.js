const express = require('express');
const router = express.Router();

// Import các route con
const citizenRoutes = require('./citizenRoutes');
const apartmentRoutes = require('./apartmentRoutes');
const assetRoutes = require('./assetRoutes');

// Gán các route với đường dẫn tương ứng
router.use('/', citizenRoutes);
router.use('/', apartmentRoutes);
router.use('/', assetRoutes);

module.exports = router;
