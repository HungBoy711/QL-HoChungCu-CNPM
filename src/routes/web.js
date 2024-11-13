const express = require('express');
const router = express.Router();

const citizenRoutes = require('./citizenRoutes');
const apartmentRoutes = require('./apartmentRoutes');
const assetCatRoutes = require('./assetCatRoutes');
const assetRoutes = require('./assetRoutes')
const homeRoutes = require('./homeRoutes')
const contractRoutes = require('./contractRoutes')
const invoiceRoutes = require('./invoiceRoutes')
const authRoutes = require('./authRoutes')
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, (req, res) => {
    res.redirect('/homepage');
});

router.use('/', homeRoutes);
router.use('/', citizenRoutes);
router.use('/', apartmentRoutes);
router.use('/', assetCatRoutes);
router.use('/', assetRoutes);
router.use('/', contractRoutes);
router.use('/', invoiceRoutes);
router.use('/', authRoutes);

module.exports = router;
