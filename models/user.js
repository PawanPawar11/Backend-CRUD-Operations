const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testApp");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    imgURL: String
});

module.exports = mongoose.model('testAppUser', userSchema);