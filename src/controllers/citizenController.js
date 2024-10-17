const express = require('express');
const Citizen = require('../models/citizen')


const getHomePage = async (req, res) => {
    return res.render('home/homePage.ejs')
}

const getCitizenPage = async (req, res) => {
    let results = await Citizen.find({});
    return res.render('citizens/citizenPage.ejs', { listCitizens: results })
}
const searchCitizen = async (req, res) => {
    let name = req.body.data
    if (!name || name.trim() === '') {
        return res.redirect('/citizen');
    }
    let results = await Citizen.find({
        Name: { $regex: name, $options: "i" }
    });
    return res.render('citizens/citizenPage.ejs', { listCitizens: results })
}
const searchCitizenRoom = async (req, res) => {
    let room = req.body.data
    if (!room || room.trim() === '') {
        return res.redirect('/citizen');
    }
    let results = await Citizen.find({ ApartID: room });
    return res.render('citizens/citizenPage.ejs', { listCitizens: results })
}
const createCitizenPage = (req, res) => {
    return res.render('citizens/create-Citizen.ejs')
}
const createCitizen = async (req, res) => {
    let CitizenID = req.body.CitizenID
    let ApartID = req.body.ApartID
    let Relationship = req.body.Relationship
    let Name = req.body.Name
    let BirthDay = req.body.BirthDay
    let Gender = req.body.Gender
    let Hometown = req.body.Hometown
    let Phone = req.body.Phone
    await Citizen.create({
        CitizenID: CitizenID,
        ApartID: ApartID,
        Relationship: Relationship,
        Name: Name,
        BirthDay: BirthDay,
        Gender: Gender,
        Hometown: Hometown,
        Phone: Phone
    }
    )

    res.redirect('/citizen')
}
const editCitizenPage = async (req, res) => {
    let CitizenID = req.params.id;
    let citizen = await Citizen.findById(CitizenID).exec();
    return res.render('citizens/edit-Citizen.ejs', { citizen: citizen })
}

const editCitizen = async (req, res) => {
    let id = req.body.id
    let CitizenID = req.body.CitizenID
    let ApartID = req.body.ApartID
    let Relationship = req.body.Relationship
    let Name = req.body.Name
    let Gender = req.body.Gender
    let Hometown = req.body.Hometown
    let BirthDay = req.body.BirthDay
    let Phone = req.body.Phone

    await Citizen.updateOne({ _id: id }, {
        CitizenID: CitizenID, ApartID: ApartID, Relationship: Relationship,
        Name: Name, BirthDay: BirthDay, Gender: Gender,
        Hometown: Hometown, Phone: Phone
    });
    res.redirect('/citizen');
}

const deleteCitizenPage = async (req, res) => {
    let CitizenID = req.params.id;
    let citizen = await Citizen.findById(CitizenID).exec();
    return res.render('citizens/delete-Citizen.ejs', { citizen: citizen })
}
const deleteCitizen = async (req, res) => {
    let ID = req.body.ID
    await Citizen.deleteOne({
        _id: ID
    });
    res.redirect('/citizen');
}
module.exports = {
    getHomePage, getCitizenPage, createCitizen, createCitizenPage,
    deleteCitizenPage, deleteCitizen, editCitizenPage, editCitizen
    , searchCitizen, searchCitizenRoom
}