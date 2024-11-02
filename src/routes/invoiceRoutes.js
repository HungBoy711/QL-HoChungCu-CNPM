const express = require('express');
const router = express.Router();

const { getInvoicePage, createInvoice,
    editInvoice, deleteInvoice
} = require('../controllers/invoiceController')

router.get('/Invoice', getInvoicePage)
router.post('/create-Invoice', createInvoice)
router.post('/edit-Invoice', editInvoice)
router.post('/delete-Invoice', deleteInvoice)

module.exports = router