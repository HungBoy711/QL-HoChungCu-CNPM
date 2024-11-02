const mongoose = require('mongoose')

const contractSchema = new mongoose.Schema({
    ContractID: String,
    Owner: String,
    ContractType: String,
    ContractStartDate: String,
    ContractEndDate: String,
    ContractStatus: String
});
const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
