const mongoose = require('mongoose')

const citizenSchema = new mongoose.Schema({
    CitizenID: { type: String, unique: true, required: true },
    Password: { type: Number, required: false },
    ApartID: { type: Number, required: true },
    Relationship: { type: String, required: true },
    Name: { type: String, required: true },
    BirthDay: { type: Date, required: true },
    Gender: { type: String, required: true },
    Hometown: { type: String, required: true },
    Phone: { type: Number, required: true }
});
const Citizen = mongoose.model('Citizen', citizenSchema);

module.exports = Citizen;
