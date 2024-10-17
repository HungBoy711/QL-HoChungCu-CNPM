const express = require('express');
const router = express.Router();

const citizenRoutes = require('./citizenRoutes');
const apartmentRoutes = require('./apartmentRoutes');
const assetCatRoutes = require('./assetCatRoutes');
const assetRoutes = require('./assetRoutes')

router.use('/', citizenRoutes);
router.use('/', apartmentRoutes);
router.use('/', assetCatRoutes);
router.use('/', assetRoutes);

module.exports = router;
