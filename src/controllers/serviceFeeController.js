const express = require('express');
const ServiceFee = require('../models/serviceFee')
const PaymentHistory = require('../models/paymentHistory')

const getServiceFeePage = async (req, res) => {
    try {
        const results = await ServiceFee.aggregate([
            {
                $project: {
                    ServiceFeeID: 1,
                    ApartID: 1,
                    Owner: 1,
                    PaymentMonth: {
                        $dateToString: { format: "%d-%m-%Y", date: "$PaymentMonth" }
                    },
                    ParkingFee: 1,
                    GarbageFee: 1,
                    EnvironmentalFee: 1,
                    TotalFee: { $sum: ["$ParkingFee", "$GarbageFee", "$EnvironmentalFee"] },
                    Status: 1
                }
            }
        ]);
        return res.render('servicefees/serviceFeePage.ejs', { listServiceFees: results })
    } catch (error) {
        console.error("Lỗi", error);
    }
};

const createServiceFee = async (req, res) => {
    let { ServiceFeeID, ApartID, Owner, PaymentMonth, ParkingFee,
        GarbageFee, EnvironmentalFee, Status } = req.body
    try {
        await ServiceFee.create({
            ServiceFeeID,
            ApartID,
            Owner,
            PaymentMonth,
            GarbageFee,
            ParkingFee,
            EnvironmentalFee,
            Status
        })
        res.status(200).redirect('/serviceFee');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu không hợp lệ' });
    }
}

const editServiceFee = async (req, res) => {
    let { ID, ServiceFeeID, ApartID, Owner, PaymentTerm,
        GarbageFee, EnvironmentalFee, Status } = req.body
    try {
        await ServiceFee.updateOne({ _id: ID },
            {
                ServiceFeeID,
                ApartID,
                Owner,
                PaymentTerm,
                GarbageFee,
                ParkingFee,
                EnvironmentalFee,
                Status
            })
        res.status(200).redirect('/serviceFee');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu không hợp lệ' });
    }
}

const deleteServiceFee = async (req, res) => {
    let ID = req.body.ID
    try {
        await ServiceFee.deleteOne({
            _id: ID
        });
        res.status(200).redirect('/serviceFee');
    }
    catch (error) {
        res.status(400).json({ message: 'Lỗi' });
    }
}

const setPaymentMonth = async (req, res) => {
    let paymentMonth = req.body.Payment
    try {
        await ServiceFee.updateMany({},
            {
                $set: {
                    Status: "Chưa thanh toán",
                    PaymentMonth: paymentMonth
                }
            }
        )
        res.status(200).redirect('/serviceFee');
    }
    catch (error) {
        res.status(400).json({ message: 'Lỗi' });
    }
}
const getPaymentPage = async (req, res) => {
    let ID = req.params.id;
    let results = await ServiceFee.findById(ID).exec();
    console.log(results)
    return res.render('servicefees/getPaymentPage', { servicefee: results })
};
const getPayment = async (req, res) => {
    let { ServiceFeeID, Owner, ApartID, PaymentMonth, PaymentDate, Description,
        ParkingFee, GarbageFee, EnvironmentalFee, TotalFee, Status } = req.body;

    try {
        await PaymentHistory.create({
            ServiceFeeID,
            PaymentMonth,
            PaymentDate,
            Description,
            ApartID,
            Owner,
            ParkingFee,
            GarbageFee,
            EnvironmentalFee,
            TotalFee,
            Status
        });
        await ServiceFee.updateOne(
            { ServiceFeeID: ServiceFeeID },
            { $set: { Status: Status } }
        );
        res.status(200).redirect('/paymentHistory');
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi' });
    };
};


module.exports = {
    getServiceFeePage, createServiceFee,
    editServiceFee, deleteServiceFee,
    getPayment,
    getPaymentPage
}