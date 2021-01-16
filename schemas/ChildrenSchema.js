const mongoose = require('mongoose');

const ChildrenSchema = new mongoose.Schema({
    ChildInfo: {
        childID:String,
        childName:String,
        childLastName:String,
        FatherName:String,
        MotherName:String,
        Birthday:String,
        disabilityType:String,
        location1:String,
        location2:String,
        AccompanyingPersonName:String,
        
    },
    active:Boolean
})

module.exports = ChildrenSchema;