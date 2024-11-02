const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    InvoiceID: String,
    ApartID: Number,
    CurentDateTerm: Date,
    NextPaymentTerm: Date,
    ApartmentFee: Number,
    ElectricityFee: Number,
    WaterFee: Number
});
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;