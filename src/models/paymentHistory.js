const mongoose = require('mongoose')

const paymentHistorySchema = new mongoose.Schema({
    ServiceFeeID: { type: String, required: true },
    PaymentDate: { type: Date, required: true },
    Description: { type: String, required: true },
    ApartID: { type: Number, required: true },
    Owner: { type: String, required: true },
    PaymentMonth: { type: Date },
    ParkingFee: { type: Number, required: true },
    GarbageFee: { type: Number, required: true },
    EnvironmentalFee: { type: Number, required: true },
    TotalFee: { type: Number, required: true },
    Status: { type: String, required: true }
});
const PaymentHistory = mongoose.model('PaymentHistory', paymentHistorySchema);

module.exports = PaymentHistory;