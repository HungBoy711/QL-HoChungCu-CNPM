const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');


const { getServiceFeePage, createServiceFee,
    editServiceFee, deleteServiceFee,
    getPayment,
    getPaymentPage
} = require('../controllers/serviceFeeController')

router.get('/serviceFee', verifyToken, getServiceFeePage)
router.post('/create-ServiceFee', createServiceFee)
router.post('/edit-ServiceFee', editServiceFee)
router.post('/delete-ServiceFee', deleteServiceFee)
router.get('/get-PaymentPage/:id', verifyToken, getPaymentPage)
router.post('/get-Payment', getPayment)

module.exports = router