const mongoose = require('mongoose');
let AccountSchema = new mongoose.Schema({
    title: String,
    time: Date,
    type: String,
    account: Number,
    remarks: String
});
let AccountModel = mongoose.model('accounts',AccountSchema);
module.exports = AccountModel;