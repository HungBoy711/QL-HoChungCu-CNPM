const express = require('express');
const router = express.Router();

const citizenRoutes = require('./citizenRoutes');
const apartmentRoutes = require('./apartmentRoutes');
const assetCatRoutes = require('./assetCatRoutes');
const assetRoutes = require('./assetRoutes')
const homeRoutes = require('./homeRoutes')
const contractRoutes = require('./contractRoutes')
const invoiceRoutes = require('./invoiceRoutes')

router.use('/', citizenRoutes);
router.use('/', apartmentRoutes);
router.use('/', assetCatRoutes);
router.use('/', assetRoutes);
router.use('/', homeRoutes);
router.use('/', contractRoutes);
router.use('/', invoiceRoutes);

module.exports = router;
