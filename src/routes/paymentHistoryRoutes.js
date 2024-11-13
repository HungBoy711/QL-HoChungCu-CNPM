const express = require('express');
const router = express.Router();

const { getPaymentHistoryPage } = require('../controllers/paymentHistoryController')

router.get('/paymentHistory', getPaymentHistoryPage)

module.exports = router