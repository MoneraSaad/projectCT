const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const ChildrenCardSchema = require('../schemas/ChildrenCardSchema');
const ChildrenCardModel = mongoose.model("ChildrenCardModel", ChildrenCardSchema);


router.post('/editChildCard', (req, res) => {
    console.log("serever side has been reached ")
    const { childInfo, fatherInfo, motherInfo } = req.body;
    console.log(childInfo);
    console.log(fatherInfo);
    console.log(motherInfo);
    ChildrenCardModel.find({ "ChildInfo.childID": childInfo.childID }).then(checkUserName => {
        console.log(checkUserName);
        if (checkUserName.length > 0) {

            res.send({ success: true, error: null })
            res.end();

        } else {

            let temp = {
                childInfo: {
                    childName: "Alon",
                    childLastName: "Golan",
                    childID: "204895738",
                    streetAdrees1: "Haifa,street1-32,home number 2",
                    streetAdrees2: "Haifa,street2-34,home number 4",
                    city: "Haifa",
                    zipCode: "3244680",
                    gender: "Male",
                },

                fatherInfo: {
                    firstName: "Alex",
                    lastName: "Golan",
                    fatherID: "512637488",
                    phoneNum: "0502348755",
                    homeAdrees: "Haifa,street1-32,home number 2",
                    email: "Alex@gmail.com"
                },

                motherInfo: {
                    firstName: "Tamar",
                    lastName: "Fredman",
                    motherID: "512637467",
                    phoneNum: "0523774658",
                    homeAdrees: "Haifa street2-34,home number 4",
                    email: "Tamar@gmail.com"
                },
                AccompanyingPersonInfo: {
                    firstName: "Annie",
                    lastName: "Arman",
                    phoneNum: "0506756748",
                    email: "Annie@gmail.com",
                    gender: "Female",
                },
                schoolInfo: {
                    schoolName: "Haifa Elementary School",
                    SchoolAdministrator: "Helen Cohen",
                    phoneNum: "047826467",
                    Adrees: "Haifa,street1-78",
                }

            }

            // var data = new UserModel({ userInfo: temp });
            // data.save(); 
            res.send({ success: false, error: "User does not exist" });
        }


    })
}
)

//getMyChildInfo
router.post('/getMyChildInfo', (req, res) => {
    console.log("serever side function getMyChildInfo")
    const { userID } = req.body;
    console.log(userID);
    let childInformation = [];
    ChildrenCardModel.find({ "FatherInfo.fatherID": userID }).then(docs => {
        console.log(docs);
        if (docs.length > 0) {

            let childInfo = {
                childName: docs[0].ChildInfo.childName,
                childLastName: docs[0].ChildInfo.childLastName,
                childID: docs[0].ChildInfo.childID,
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
                Adrees: docs[0].SchoolInfo.Adress
            };

            childInformation.push(childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo);
            console.log("childInformation in success=true FatherID");
            console.log(childInformation);
            res.send({ success: true, error: null, info: childInformation });

        } else {
            ChildrenCardModel.find({ "MotherInfo.motherID": userID }).then(docs => {
                console.log(docs);
                if (docs.length > 0) {

                    let childInfo = {
                        childName: docs[0].ChildInfo.childName,
                        childLastName: docs[0].ChildInfo.childLastName,
                        childID: docs[0].ChildInfo.childID,
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
                        Adrees: docs[0].SchoolInfo.Adress
                    };

                    childInformation.push(childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo);
                    console.log("childInformation in success=true MotherID");
                    console.log(childInformation);
                    res.send({ success: true, error: null, info: childInformation });

                } else {


                    /*           let childInfo = {
   
                    
                   childName: 'Mor',
                   childLastName: "Ben Zaken",
                   childID: "206454454",
                   streetAdrees1: "Haifa,street1-70,home number 10",
                   streetAdrees2: "Haifa,street1-70,home number 10",
                   city: "Haifa",
                   zipCode: "3244680",
                   gender: "Female",
               };
               let fatherInfo = {
                   firstName: "Tal",
                   lastName: "Ben Zaken",
                   fatherID: "543343227",
                   phoneNum: "0502348755",
                   homeAdrees: "Haifa,street1-70,home number 10",
                   email: "Tal@gmail.com"
               };
   
               let motherInfo = {
                   firstName: "Aleen",
                   lastName: "Ben Zaken",
                   motherID: "201232122",
                   phoneNum: "0534536644",
                   homeAdrees: "Haifa street1-34,home number 4",
                   email: "Aleen@gmail.com"
               };
               let accompanyingPersonInfo = {
                   firstName: "Annie",
                   lastName: "Arman",
                   phoneNum: "0506756748",
                   email: "Annie@gmail.com",
                   gender: "Female",
               };
               let schoolInfo = {
                   schoolName: "Haifa Elementary School",
                   SchoolAdministrator: "Helen Cohen",
                   phoneNum: "047826467",
                   Adress: "Haifa,street1-78",
               }; 
   
               childInformation.push(childInfo,fatherInfo,motherInfo,accompanyingPersonInfo,schoolInfo);
               console.log("childInformation in success=false");
                var data = new ChildrenCardModel({ ChildInfo: childInfo, FatherInfo: fatherInfo, MotherInfo: motherInfo, AccompanyingPersonInfo: accompanyingPersonInfo, SchoolInfo: schoolInfo });
                data.save(); */
                    res.send({ success: false, error: true, info: null });

                }//else no such motherId and fatherID



            })//find according to motherID
        }//else for searching about motherID
    })//find according to fatherID
    
})

//getAllChildrensCards
router.post('/getAllChildrensCards', (req, res) => {
    console.log("serever side function getAllChildrensCards")
    const { userRole } = req.body;
    console.log(userRole);
    let childrenInformation = [];
    ChildrenCardModel.find().then(docs => {
        console.log(docs);
        if (docs.length > 0) {

            res.send({ success: true, error: null, info: docs });

        } else {

            /*      let childInfo = {
     
                     childName: 'Alon',
                     childLastName: "Golan",
                     childID: "204895738",
                     streetAdrees1: "Haifa,street1-32,home number 2",
                     streetAdrees2: "Haifa,street2-34,home number 4",
                     city: "Haifa",
                     zipCode: "3244680",
                     gender: "Male",
                 };
                 let fatherInfo = {
                     firstName: "Alex",
                     lastName: "Golan",
                     fatherID: userID,
                     phoneNum: "0502348755",
                     homeAdrees: "Haifa,street1-32,home number 2",
                     email: "Alex@gmail.com"
                 };
     
                 let motherInfo = {
                     firstName: "Tamar",
                     lastName: "Fredman",
                     motherID: "512637467",
                     phoneNum: "0523774658",
                     homeAdrees: "Haifa street2-34,home number 4",
                     email: "Tamar@gmail.com"
                 };
                 let accompanyingPersonInfo = {
                     firstName: "Annie",
                     lastName: "Arman",
                     phoneNum: "0506756748",
                     email: "Annie@gmail.com",
                     gender: "Female",
                 };
                 let schoolInfo = {
                     schoolName: "Haifa Elementary School",
                     SchoolAdministrator: "Helen Cohen",
                     phoneNum: "047826467",
                     Adress: "Haifa,street1-78",
                 }; */
            // var data = new ChildrenCardModel({ ChildInfo: childInfo, FatherInfo: fatherInfo, MotherInfo: motherInfo, AccompanyingPersonInfo: accompanyingPersonInfo, SchoolInfo: schoolInfo });
            // data.save();
            res.send({ success: false, error: true, info: null });

        }




    })
}
)

module.exports = router;