const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
    ApartID: String,
    Floor: Number,
    Status: String,
    Size: String,
    WaterFee: String,
    ElectricityFee: String,
});
const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
