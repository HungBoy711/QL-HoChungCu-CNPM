const mongoose = require('mongoose')

const paymentHistorySchema = new mongoose.Schema({
    InvoiceID: String,
    ApartNumber: Number,
    Owner: String,
    PaymentDate: Date,
    Description: String

});
const PaymentHistory = mongoose.model('PaymentHistory', paymentHistorySchema);

module.exports = PaymentHistory;