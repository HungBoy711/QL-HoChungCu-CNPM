const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/homeController')

router.get('/Data', getData)

module.exports = router