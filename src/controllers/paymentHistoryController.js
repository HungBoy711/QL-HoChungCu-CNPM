const express = require('express');
const PaymentHistory = require('../models/paymentHistory')
const Invoice = require('../models/invoice')

const getPaymentHistoryPage = async (req, res) => {
    let results = await PaymentHistory.aggregate([
        {
            $lookup: {
                from: "invoices",
                localField: "InvoiceID",
                foreignField: "InvoiceID",
                as: "PaymentInfo"
            }
        },
        { $unwind: "$PaymentInfo" },
        {
            $project: {
                _id: 1,
                InvoiceID: 1,
                PaymentDate: {
                    $dateToString: { format: "%Y-%m-%d", date: "$PaymentDate" }
                },
                "PaymentInfo.PaymentTerm": {
                    $dateToString: { format: "%Y-%m-%d", date: "$PaymentInfo.PaymentTerm" }
                },
                "PaymentInfo.ApartmentFee": 1,
                "PaymentInfo.ElectricityFee": 1,
                "PaymentInfo.WaterFee": 1,
                "PaymentInfo.Total": 1,
                Description: 1,

            }
        }
    ]);
    return res.render('paymentHistories/paymentHistoryPage.ejs', { listPaymentHistories: results })
}

module.exports = {
    getPaymentHistoryPage
}