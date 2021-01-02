const mongoose = require('mongoose');

const AccompanyingPersonSchema = new mongoose.Schema({
    AccompanyingPersonInfo: {
    userName: String,
    userLastName:String,
    userID:String,
    userEmail: String,
    phoneNumber:String,
    userRole: String,
    password: String,
    city:String,
    streetNum:String,
    },
    active:Boolean
});


module.exports = AccompanyingPersonSchema;