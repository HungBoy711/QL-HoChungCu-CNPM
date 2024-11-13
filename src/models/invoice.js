const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    InvoiceID: String,
    ContractID: String,
    PaidDate: Date,
    PaymentTerm: Date,
    ApartmentFee: Number,
    ElectricityFee: Number,
    WaterFee: Number,
    Total: Number,
    Description: String,

});
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;