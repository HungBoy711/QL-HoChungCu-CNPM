const express = require('express');
const Apartment = require('../models/apartment')

const getData = async (req, res) => {
    try {
        const data = [
            {
                "WaterFee": 320
            },
            {
                "WaterFee": 552
            }
        ]
        return res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
}

module.exports = { getData }