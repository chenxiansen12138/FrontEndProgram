const mongoose = require('mongoose');
let AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});
let AccountModel = mongoose.model('users',AccountSchema);
module.exports = AccountModel;