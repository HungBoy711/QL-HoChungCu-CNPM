const express = require('express');
const CitizenAccount = require('../models/citizenAccount')
const Citizen = require('../models/citizen')
const getCitizenHomePage = async (req, res) => {
    try {
        const citizenAccount = res.locals.citizenAccount;
        const member = await Citizen.find({ ApartID: citizenAccount.ApartID })
        return res.render('home/citizenHomePage.ejs');
    } catch (error) {
        console.error("Lỗi data:", error);
        return res.render('errorData.ejs');
    }
}

module.exports = { getCitizenHomePage }