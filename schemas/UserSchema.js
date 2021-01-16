const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userInfo: {
        userName: String,
        userLastName:String,
        userID:String,
        userEmail: String,
        phoneNumber:String,
        userRole: String,
        password: String,
        city:String,
        streetNum:String,
        gender:String,
		checkBox1:Array
		
    },
    active:Boolean
})

module.exports = UserSchema;