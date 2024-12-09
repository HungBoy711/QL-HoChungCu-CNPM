const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

const { getPaymentHistoryPage, searchPaymentDate } = require('../controllers/paymentHistoryController')

router.get('/paymentHistory', verifyToken, getPaymentHistoryPage)
router.post('/searchPaymentDate/', verifyToken, searchPaymentDate)


module.exports = router