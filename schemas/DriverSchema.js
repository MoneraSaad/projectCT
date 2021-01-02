const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
    driverInfo: {
    userName: String,
    userLastName:String,
    userID:String,
    userEmail: String,
    phoneNumber:String,
    userRole: String,
    password: String,
    city:String,
    workDays:String,
    lat:String,
    long:String
    },
    active:Boolean
});


module.exports = DriverSchema;