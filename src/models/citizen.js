const mongoose = require('mongoose')

const citizenSchema = new mongoose.Schema({
    CitizenID: String,
    ApartID: String,
    Relationship: String,
    Name: String,
    BirthDay: String,
    Gender: String,
    Hometown: String,
    Phone: String,
});
const Citizen = mongoose.model('Citizen', citizenSchema);

module.exports = Citizen;
