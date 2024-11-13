const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

const { getInvoicePage, createInvoice,
    editInvoice, deleteInvoice
} = require('../controllers/invoiceController')

router.get('/Invoice', verifyToken, getInvoicePage)
router.post('/create-Invoice', createInvoice)
router.post('/edit-Invoice', editInvoice)
router.post('/delete-Invoice', deleteInvoice)

module.exports = router