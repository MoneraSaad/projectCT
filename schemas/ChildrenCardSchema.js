const mongoose = require('mongoose');

const ChildrenCardSchema = new mongoose.Schema({
    ChildInfo: {
        childName:String,
        childLastName: String,
        childID:String,
        streetAdrees1: String,
        streetAdrees2: String,
        city:String,
        zipCode:String,
        gender:String,
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
    },
    SchoolInfo :{
        schoolName:String,
        SchoolAdministrator:String,
        phoneNum:String,
        Adress:String,
    }
   
})

module.exports = ChildrenCardSchema;