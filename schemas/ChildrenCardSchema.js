const mongoose = require('mongoose');

const ChildrenCardSchema = new mongoose.Schema({
    ChildInfo: {
        childName:String,
        childLastName: String,
        childID:String,
        disabilityType:String,
        streetAdrees1: String,
        streetAdrees2: String,
        city:String,
        zipCode:String,
        gender:String,
        checkBox1:Array
    },
    FatherInfo:{
        firstName:String,
        lastName:String,
        fatherID:String,
        phoneNum:String,
        homeAdrees:String,
        email:String,

    },
    MotherInfo:{
        firstName:String,
        lastName:String,
        motherID:String,
        phoneNum:String,
        homeAdrees:String,
        email:String,
    },
    AccompanyingPersonInfo:{
        firstName:String,
        lastName:String,
        phoneNum:String,
        email:String,
        gender:String,
        userID:String
    },
    SchoolInfo :{
        schoolName:String,
        SchoolAdministrator:String,
        phoneNum:String,
        Adress:String,
    }
   
})

module.exports = ChildrenCardSchema;