const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const ChildrenCardSchema = require('../schemas/ChildrenCardSchema');
const ChildrenCardModel = mongoose.model("ChildrenCardModel", ChildrenCardSchema);
const UserSchema = require('../schemas/UserSchema');
const UserModel = mongoose.model("UserModel", UserSchema);


//getMyChildInfo
router.post('/getMyChildInfo', (req, res) => {

    const { userID } = req.body;

    let childInformation = [];
    ChildrenCardModel.find({ "FatherInfo.fatherID": userID }).then(docs => {

        if (docs.length > 0) {

            let childInfo = {
                childName: docs[0].ChildInfo.childName,
                childLastName: docs[0].ChildInfo.childLastName,
                childID: docs[0].ChildInfo.childID,
                disabilityType: docs[0].ChildInfo.disabilityType,
                streetAdrees1: docs[0].ChildInfo.streetAdrees1,
                streetAdrees2: docs[0].ChildInfo.streetAdrees2,
                city: docs[0].ChildInfo.city,
                zipCode: docs[0].ChildInfo.zipCode,
                gender: docs[0].ChildInfo.gender
            };

            let fatherInfo = {
                firstName: docs[0].FatherInfo.firstName,
                lastName: docs[0].FatherInfo.lastName,
                fatherID: docs[0].FatherInfo.fatherID,
                phoneNum: docs[0].FatherInfo.phoneNum,
                homeAdrees: docs[0].FatherInfo.homeAdrees,
                email: docs[0].FatherInfo.email
            };

            let motherInfo = {
                firstName: docs[0].MotherInfo.firstName,
                lastName: docs[0].MotherInfo.lastName,
                motherID: docs[0].MotherInfo.motherID,
                phoneNum: docs[0].MotherInfo.phoneNum,
                homeAdrees: docs[0].MotherInfo.homeAdrees,
                email: docs[0].MotherInfo.email
            };
            let accompanyingPersonInfo = {
                firstName: docs[0].AccompanyingPersonInfo.firstName,
                lastName: docs[0].AccompanyingPersonInfo.lastName,
                phoneNum: docs[0].AccompanyingPersonInfo.phoneNum,
                email: docs[0].AccompanyingPersonInfo.email,
                gender: docs[0].AccompanyingPersonInfo.gender
            };

            let schoolInfo = {
                schoolName: docs[0].SchoolInfo.schoolName,
                SchoolAdministrator: docs[0].SchoolInfo.SchoolAdministrator,
                phoneNum: docs[0].SchoolInfo.phoneNum,
                Adress: docs[0].SchoolInfo.Adress
            };

            childInformation.push(childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo);

            res.send({ success: true, error: null, info: childInformation });

        } else {

            ChildrenCardModel.find({ "MotherInfo.motherID": userID }).then(docs => {

                if (docs.length > 0) {

                    let childInfo = {
                        childName: docs[0].ChildInfo.childName,
                        childLastName: docs[0].ChildInfo.childLastName,
                        childID: docs[0].ChildInfo.childID,
                        disabilityType: docs[0].ChildInfo.disabilityType,
                        streetAdrees1: docs[0].ChildInfo.streetAdrees1,
                        streetAdrees2: docs[0].ChildInfo.streetAdrees2,
                        city: docs[0].ChildInfo.city,
                        zipCode: docs[0].ChildInfo.zipCode,
                        gender: docs[0].ChildInfo.gender
                    };

                    let fatherInfo = {
                        firstName: docs[0].FatherInfo.firstName,
                        lastName: docs[0].FatherInfo.lastName,
                        fatherID: docs[0].FatherInfo.fatherID,
                        phoneNum: docs[0].FatherInfo.phoneNum,
                        homeAdrees: docs[0].FatherInfo.homeAdrees,
                        email: docs[0].FatherInfo.email
                    };

                    let motherInfo = {
                        firstName: docs[0].MotherInfo.firstName,
                        lastName: docs[0].MotherInfo.lastName,
                        motherID: docs[0].MotherInfo.motherID,
                        phoneNum: docs[0].MotherInfo.phoneNum,
                        homeAdrees: docs[0].MotherInfo.homeAdrees,
                        email: docs[0].MotherInfo.email
                    };
                    let accompanyingPersonInfo = {
                        firstName: docs[0].AccompanyingPersonInfo.firstName,
                        lastName: docs[0].AccompanyingPersonInfo.lastName,
                        phoneNum: docs[0].AccompanyingPersonInfo.phoneNum,
                        email: docs[0].AccompanyingPersonInfo.email,
                        gender: docs[0].AccompanyingPersonInfo.gender
                    };

                    let schoolInfo = {
                        schoolName: docs[0].SchoolInfo.schoolName,
                        SchoolAdministrator: docs[0].SchoolInfo.SchoolAdministrator,
                        phoneNum: docs[0].SchoolInfo.phoneNum,
                        Adress: docs[0].SchoolInfo.Adress
                    };

                    childInformation.push(childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo);

                    res.send({ success: true, error: null, info: childInformation });

                } else {

                    res.send({ success: false, error: true, info: null });

                }//else no such motherId and fatherID



            })//find according to motherID
        }//else for searching about motherID
    })//find according to fatherID

})

//getAllChildrensCards for the accompanying person
router.post('/getAllChildrensCards', (req, res) => {

    const { AccompanyingPerson } = req.body;

    let childrenInformation = [];
    ChildrenCardModel.find({ "AccompanyingPersonInfo.userID": AccompanyingPerson }).then(docs => {

        if (docs.length > 0) {
            docs.map((item, index) => {
                childrenInformation.push({
                    childName: item.ChildInfo.childName,
                    childLastName: item.ChildInfo.childLastName,
                    childID: item.ChildInfo.childID,
                    gender: item.ChildInfo.gender,
                    checkBox1:item.ChildInfo.checkBox1,
                    phoneNum: item.FatherInfo.phoneNum,
                    phoneNum2: item.MotherInfo.phoneNum
                });
            })
            res.send({ success: true, error: null, info: childrenInformation });
            res.end();
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }

    })
}
)


//getMyChildInfo
router.post('/getAccompanyingPersonPhone', (req, res) => {

    const { userID } = req.body;

    let childInformation = [];
    ChildrenCardModel.find({ "FatherInfo.fatherID": userID }).then(docs => {

        if (docs.length > 0) {


            let accompanyingPersonInfo = {
                firstName: docs[0].AccompanyingPersonInfo.firstName,
                lastName: docs[0].AccompanyingPersonInfo.lastName,
                phoneNum: docs[0].AccompanyingPersonInfo.phoneNum,
                email: docs[0].AccompanyingPersonInfo.email,
                gender: docs[0].AccompanyingPersonInfo.gender
            };


            childInformation.push(accompanyingPersonInfo);

            res.send({ success: true, error: null, info: childInformation });

        } else {
            ChildrenCardModel.find({ "MotherInfo.motherID": userID }).then(docs => {

                if (docs.length > 0) {

                    let accompanyingPersonInfo = {
                        firstName: docs[0].AccompanyingPersonInfo.firstName,
                        lastName: docs[0].AccompanyingPersonInfo.lastName,
                        phoneNum: docs[0].AccompanyingPersonInfo.phoneNum,
                        email: docs[0].AccompanyingPersonInfo.email,
                        gender: docs[0].AccompanyingPersonInfo.gender
                    };
                    childInformation.push(accompanyingPersonInfo);

                    res.send({ success: true, error: null, info: childInformation });

                } else {

                    res.send({ success: false, error: true, info: null });

                }//else no such motherId and fatherID



            })//find according to motherID
        }//else for searching about motherID
    })//find according to fatherID

})

//createChildCard
router.post('/createChildCard', (req, res) => {

    const { childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo } = req.body;

    ChildrenCardModel.find({ "ChildInfo.childID": childInfo.childID }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: false, error: true, info: null });
            res.end();
        } else {
            let childInfo1 = {
                childName: childInfo.childName,
                childLastName: childInfo.childLastName,
                childID: childInfo.childID,
                disabilityType: childInfo.disabilityType,
                streetAdrees1: childInfo.streetAdrees1,
                streetAdrees2: childInfo.streetAdrees2,
                city: childInfo.city,
                zipCode: childInfo.zipCode,
                gender: childInfo.gender,
                checkBox1:[0,0,0,0,0,0,0]
            };

            let fatherInfo1 = {
                firstName: fatherInfo.firstName,
                lastName: fatherInfo.lastName,
                fatherID: fatherInfo.fatherID,
                phoneNum: fatherInfo.phoneNum,
                homeAdrees: fatherInfo.homeAdrees,
                email: fatherInfo.email
            };

            let motherInfo1 = {
                firstName: motherInfo.firstName,
                lastName: motherInfo.lastName,
                motherID: motherInfo.motherID,
                phoneNum: motherInfo.phoneNum,
                homeAdrees: motherInfo.homeAdrees,
                email: motherInfo.email
            };
            let accompanyingPersonInfo1 = {
                firstName: accompanyingPersonInfo.firstName,
                lastName: accompanyingPersonInfo.lastName,
                phoneNum: accompanyingPersonInfo.phoneNum,
                email: accompanyingPersonInfo.email,
                gender: accompanyingPersonInfo.gender,
                userID: accompanyingPersonInfo.userID,
            };

            let schoolInfo1 = {
                schoolName: schoolInfo.schoolName,
                SchoolAdministrator: schoolInfo.SchoolAdministrator,
                phoneNum: schoolInfo.phoneNum,
                Adress: schoolInfo.Adress
            };

            var data = new ChildrenCardModel({ ChildInfo: childInfo1, FatherInfo: fatherInfo1, MotherInfo: motherInfo1, AccompanyingPersonInfo: accompanyingPersonInfo1, SchoolInfo: schoolInfo1 });
            data.save();
            res.send({ success: true, error: null, info: data });
        }
    })//find according to fatherID

})


//getChildInfo
router.post('/getChildInfo', (req, res) => {

    const { childNum } = req.body;

    let childInformation = [];
    ChildrenCardModel.find({ "ChildInfo.childID": childNum }).then(docs => {

        if (docs.length > 0) {

            let childInfo = {
                childName: docs[0].ChildInfo.childName,
                childLastName: docs[0].ChildInfo.childLastName,
                childID: docs[0].ChildInfo.childID,
                disabilityType: docs[0].ChildInfo.disabilityType,
                streetAdrees1: docs[0].ChildInfo.streetAdrees1,
                streetAdrees2: docs[0].ChildInfo.streetAdrees2,
                city: docs[0].ChildInfo.city,
                zipCode: docs[0].ChildInfo.zipCode,
                gender: docs[0].ChildInfo.gender
            };
         
            let fatherInfo = {
                firstName: docs[0].FatherInfo.firstName,
                lastName: docs[0].FatherInfo.lastName,
                fatherID: docs[0].FatherInfo.fatherID,
                phoneNum: docs[0].FatherInfo.phoneNum,
                homeAdrees: docs[0].FatherInfo.homeAdrees,
                email: docs[0].FatherInfo.email
            };

            let motherInfo = {
                firstName: docs[0].MotherInfo.firstName,
                lastName: docs[0].MotherInfo.lastName,
                motherID: docs[0].MotherInfo.motherID,
                phoneNum: docs[0].MotherInfo.phoneNum,
                homeAdrees: docs[0].MotherInfo.homeAdrees,
                email: docs[0].MotherInfo.email
            };
            let accompanyingPersonInfo = {
                firstName: docs[0].AccompanyingPersonInfo.firstName,
                lastName: docs[0].AccompanyingPersonInfo.lastName,
                phoneNum: docs[0].AccompanyingPersonInfo.phoneNum,
                email: docs[0].AccompanyingPersonInfo.email,
                gender: docs[0].AccompanyingPersonInfo.gender
            };

            let schoolInfo = {
                schoolName: docs[0].SchoolInfo.schoolName,
                SchoolAdministrator: docs[0].SchoolInfo.SchoolAdministrator,
                phoneNum: docs[0].SchoolInfo.phoneNum,
                Adress: docs[0].SchoolInfo.Adress
            };
            childInformation.push(childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo);
            res.send({ success: true, error: null, info: childInformation });
            res.end();
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }
    })

})

//getChildrensCards for the school Administrator
router.post('/getChildrensCards', (req, res) => {

    let childrenInformation = [];
    ChildrenCardModel.find({}).then(docs => {

        if (docs.length > 0) {
            docs.map((item, index) => {
                childrenInformation.push({
                    childName: item.ChildInfo.childName,
                    childLastName: item.ChildInfo.childLastName,
                    childID: item.ChildInfo.childID,
                    gender: item.ChildInfo.gender,
                    checkBox1:item.ChildInfo.checkBox1,
                    phoneNum: item.FatherInfo.phoneNum,
                    phoneNum2: item.MotherInfo.phoneNum,
                    accompanyingPersonName:item.AccompanyingPersonInfo.firstName,
                    accompanyingPersonLastName:item.AccompanyingPersonInfo.lastName,
                    accompanyingPersonID:item.AccompanyingPersonInfo.userID,
                    accompanyingPersonPhoneNum:item.AccompanyingPersonInfo.phoneNum,

                });

            })
            res.send({ success: true, error: null, info: childrenInformation });
            res.end();
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }

    })
}
)

module.exports = router;