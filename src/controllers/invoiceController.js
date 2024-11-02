const express = require('express');
const Invoice = require('../models/invoice')



const getInvoicePage = async (req, res) => {
    let results = await Invoice.aggregate([
        {
            $project: {
                _id: 1,
                CurentDateTerm: {
                    $dateToString: { format: "%Y-%m-%d", date: "$CurentDateTerm" },
                },
                NextPaymentTerm: {
                    $dateToString: { format: "%Y-%m-%d", date: "$NextPaymentTerm" },
                },
                ApartID: 1,
                InvoiceID: 1,
                ApartmentFee: 1,
                ElectricityFee: 1,
                WaterFee: 1
            }
        }
    ]);
    return res.render('invoices/invoicePage.ejs', { listInvoices: results })
}

const createInvoice = async (req, res) => {
    let InvoiceID = req.body.InvoiceID;
    let ApartID = req.body.ApartID;
    let CurentDateTerm = req.body.CurentDateTerm;
    let NextPaymentTerm = req.body.NextPaymentTerm;
    let ApartmentFee = req.body.ApartmentFee;
    let ElectricityFee = req.body.ElectricityFee;
    let WaterFee = req.body.WaterFee;

    await Invoice.create({
        InvoiceID: InvoiceID,
        ApartID: ApartID,
        CurentDateTerm: CurentDateTerm,
        NextPaymentTerm: NextPaymentTerm,
        ApartmentFee: ApartmentFee,
        ElectricityFee: ElectricityFee,
        WaterFee: WaterFee,
    });


    res.redirect('/invoice');
}
const editInvoice = async (req, res) => {
    let ID = req.body.ID;
    let ApartID = req.body.ApartID;
    let InvoiceID = req.body.InvoiceID;
    let CurentDateTerm = req.body.CurentDateTerm;
    let NextPaymentTerm = req.body.NextPaymentTerm;
    let ApartmentFee = req.body.ApartmentFee;
    let ElectricityFee = req.body.ElectricityFee;
    let WaterFee = req.body.WaterFee;

    await Invoice.updateOne({ _id: ID }, {
        InvoiceID: InvoiceID,
        ApartID: ApartID,
        CurentDateTerm: CurentDateTerm,
        NextPaymentTerm: NextPaymentTerm,
        ApartmentFee: ApartmentFee,
        ElectricityFee: ElectricityFee,
        WaterFee: WaterFee
    });
    res.redirect('/invoice');
};

const deleteInvoice = async (req, res) => {
    let ID = req.body.ID;
    await Invoice.deleteOne({ _id: ID });
    res.redirect('/invoice');
}

module.exports = {
    getInvoicePage, createInvoice,
    editInvoice, deleteInvoice
}