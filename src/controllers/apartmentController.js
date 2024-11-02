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
    return res.render('apartments/apartmentDetail.ejs', { citizen: citizen })
}
const createApartmentPage = (req, res) => {
    return res.render('apartments/create-Apartment.ejs');
}
const createApartment = async (req, res) => {
    let ApartID = req.body.ApartID
    let CitizenCount = req.body.CitizenCount
    let Floor = req.body.Floor
    let Status = req.body.Status
    let Size = req.body.Size
    await Apartment.create({
        ApartID: ApartID,
        CitizenCount: CitizenCount,
        Floor: Floor,
        Status: Status,
        Size: Size,
    }
    )

    res.redirect('/apartment')
}
const editApartmentPage = async (req, res) => {
    let ApartID = req.params.id;
    let apart = await Apartment.findById(ApartID).exec();
    return res.render('apartments/edit-Apartment.ejs', { apart: apart })
}
const editApartment = async (req, res) => {
    let id = req.body.id
    let ApartID = req.body.ApartID
    let CitizenCount = req.body.CitizenCount
    let Floor = req.body.Floor
    let Status = req.body.Status
    let Size = req.body.Size
    await Apartment.updateOne({ _id: id }, {
        ApartID: ApartID, CitizenCount: CitizenCount,
        Floor: Floor, Status: Status, Size: Size
    });
    res.redirect('/apartment');
}
const deleteApartmentPage = async (req, res) => {
    let ID = req.params.id;
    let apart = await Apartment.findById(ID).exec();
    return res.render('apartments/delete-Apartment.ejs', { apart: apart })
}
const deleteApartment = async (req, res) => {
    let ID = req.body.ID
    await Apartment.deleteOne({
        _id: ID
    });
    res.redirect('/apartment');
}

module.exports = {
    getApartmentPage, getApartmentDetail,
    editApartmentPage, editApartment,
    createApartmentPage, createApartment,
    deleteApartment, deleteApartmentPage
}