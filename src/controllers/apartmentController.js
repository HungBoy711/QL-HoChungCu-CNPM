const express = require('express');
const Apartment = require('../models/apartment')
const Citizen = require('../models/citizen')

const getApartmentPage = async (req, res) => {
    let results = await Apartment.find({});
    return res.render('apartments/apartmentPage.ejs', { listApartments: results })
}
const getApartmentDetail = async (req, res) => {
    let apartID = req.params.ApartID;
    let citizen = await Citizen.find({ ApartID: apartID }).exec();
    console.log('find', citizen)
    return res.render('apartments/apartmentDetail.ejs', { citizen: citizen })
}

const createApartment = async (req, res) => {
    let { ApartID, CitizenCount, Floor, Status, Size } = req.body
    try {
        await Apartment.create({
            ApartID,
            CitizenCount,
            Floor,
            Status,
            Size,
        })
        res.status(200).redirect('/apartment');
    }
    catch (error) {
        res.status(400).json({ message: 'Lỗi dữ liệu không hợp lệ' });
    }
}

const editApartment = async (req, res) => {
    let { ID, ApartID, CitizenCount, Floor, Status, Size } = req.body
    try {
        await Apartment.updateOne({ _id: ID }, {
            ApartID: ApartID,
            CitizenCount: CitizenCount,
            Floor: Floor,
            Status: Status,
            Size: Size
        });
        res.status(200).redirect('/apartment');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu không hợp lệ' });
    }
}

const deleteApartment = async (req, res) => {
    let ID = req.body.ID
    try {
        await Apartment.deleteOne({
            _id: ID
        });
        res.status(200).redirect('/apartment');
    }
    catch (error) {
        res.status(400).json({ message: 'Lỗi' });
    }

}

module.exports = {
    getApartmentPage, getApartmentDetail,
    editApartment, createApartment,
    deleteApartment
}