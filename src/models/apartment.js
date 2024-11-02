const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
    ApartID: String,
    CitizenCount: Number,
    Floor: Number,
    Status: String,
    Size: String,
});
const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
