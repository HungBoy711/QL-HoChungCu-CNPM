const express = require('express');
const Citizen = require('../models/citizen')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getCitizenPage = async (req, res) => {
    let results = await Citizen.aggregate([
        {
            $project: {
                _id: 1,
                CitizenID: 1,
                ApartID: 1,
                Relationship: 1,
                Name: 1,
                BirthDay: {
                    $dateToString: { format: "%d-%m-%Y", date: "$BirthDay" }
                },
                Gender: 1,
                Hometown: 1,
                Phone: 1
            }
        }
    ]);
    return res.render('citizens/citizenPage.ejs', { listCitizens: results })
}
const searchCitizen = async (req, res) => {
    let name = req.body.data
    try {
        if (!name || name.trim() === '') {
            return res.redirect('/citizen');
        }
        const results = await Citizen.aggregate([
            {
                $match: { Name: { $regex: name, $options: "i" } }
            },
            {
                $project: {
                    _id: 1,
                    CitizenID: 1,
                    ApartID: 1,
                    Relationship: 1,
                    Name: 1,
                    BirthDay: {
                        $dateToString: { format: "%d-%m-%Y", date: "$BirthDay" }
                    },
                    Gender: 1,
                    Hometown: 1,
                    Phone: 1
                }
            }
        ]);
        return res.render('citizens/citizenPage.ejs', { listCitizens: results })
    }
    catch (error) {
        res.status(400).json({ message: 'Lỗi dữ liệu tìm kiếm' });
    }
}
const searchCitizenRoom = async (req, res) => {
    let room = Number(req.body.data)
    try {
        if (!room || room == null) {
            return res.redirect('/citizen');
        }
        const results = await Citizen.aggregate(
            [{ $match: { ApartID: room } }
                , {
                $project: {
                    _id: 1,
                    CitizenID: 1,
                    ApartID: 1,
                    Relationship: 1,
                    Name: 1,
                    BirthDay: {
                        $dateToString: { format: "%d-%m-%Y", date: "$BirthDay" }
                    },
                    Gender: 1,
                    Hometown: 1,
                    Phone: 1
                }
            }
            ]
        );
        return res.render('citizens/citizenPage.ejs', { listCitizens: results })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu tìm kiếm' });
    }
}

const createCitizen = async (req, res) => {
    let { CitizenID, ApartID, Relationship, Name, BirthDay, Gender, Hometown, Phone } = req.body;
    try {
        await Citizen.create({
            CitizenID,
            ApartID,
            Relationship,
            Name,
            BirthDay,
            Gender,
            Hometown,
            Phone
        })
        res.status(200).redirect('/citizen');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu ' });
    }

}

const editCitizen = async (req, res) => {
    let { ID, CitizenID, ApartID, Relationship, Name, Gender, Hometown, BirthDay, Phone } = req.body;
    try {
        await Citizen.updateOne({ _id: ID }, {
            CitizenID,
            ApartID,
            Relationship,
            Name,
            BirthDay,
            Gender,
            Hometown,
            Phone
        });
        res.redirect('/citizen');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi dữ liệu không hợp lệ' });
    }
}

const deleteCitizen = async (req, res) => {
    let ID = new ObjectId(req.body.ID);
    try {
        await Citizen.deleteOne({
            _id: ID
        });
        res.redirect('/citizen');
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Lỗi' });
    }

}
module.exports = {
    getCitizenPage, createCitizen,
    deleteCitizen, editCitizen,
    searchCitizen, searchCitizenRoom
}