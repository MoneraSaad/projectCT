const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const ChildrenCardSchema = require('../schemas/ChildrenCardSchema');
const ChildrenCardModel = mongoose.model("ChildrenCardModel", ChildrenCardSchema);


router.post('/editChildCard', (req, res) => {
  
    const { childInfo, fatherInfo, motherInfo } = req.body;
  
    ChildrenCardModel.find({ "ChildInfo.childID": childInfo.childID }).then(checkUserName => {
        
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
                    firstName: "Anne",
                    lastName: "Cohen",
                    idNumber:"208674859",
                    phoneNum: "0502883755",
                    email: "Anne@gmail.com",
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
    
    const { userID } = req.body;
    
    let childInformation = [];
    ChildrenCardModel.find({ "FatherInfo.fatherID": userID }).then(docs => {
        
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
         
            res.send({ success: true, error: null, info: childInformation });

        } else {
            
            ChildrenCardModel.find({ "MotherInfo.motherID": userID }).then(docs => {
               
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
                  
                    res.send({ success: true, error: null, info: childInformation });

                } else {

                    res.send({ success: false, error: true, info: null });

                }//else no such motherId and fatherID



            })//find according to motherID
        }//else for searching about motherID
    })//find according to fatherID
    
})

//getAllChildrensCards
router.post('/getAllChildrensCards', (req, res) => {
  
    const { userRole } = req.body;
   
    let childrenInformation = [];
    ChildrenCardModel.find().then(docs => {
      
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
    
    const {childInfo,fatherInfo,motherInfo,accompanyingPersonInfo,schoolInfo} = req.body;
  
    ChildrenCardModel.find({ "ChildInfo.childID": childInfo.childID }).then(docs => {
        
        if (docs.length > 0) {
            res.send({ success: false, error: true, info: null });
            res.end();
        } else {
            let childInfo1 = {
                childName: childInfo.childName,
                childLastName: childInfo.childLastName,
                childID: childInfo.childID,
                streetAdrees1: childInfo.streetAdrees1,
                streetAdrees2: childInfo.streetAdrees2,
                city: childInfo.city,
                zipCode:childInfo.zipCode,
                gender:childInfo.gender
            };

            let fatherInfo1 = {
                firstName:fatherInfo.firstName,
                lastName: fatherInfo.lastName,
                fatherID: fatherInfo.fatherID,
                phoneNum:fatherInfo.phoneNum,
                homeAdrees: fatherInfo.homeAdrees,
                email: fatherInfo.email
            };

            let motherInfo1 = {
                firstName: motherInfo.firstName,
                lastName: motherInfo.lastName,
                motherID: motherInfo.motherID,
                phoneNum: motherInfo.phoneNum,
                homeAdrees: motherInfo.homeAdrees,
                email:motherInfo.email
            };
            let accompanyingPersonInfo1 = {
                firstName: accompanyingPersonInfo.firstName,
                lastName: accompanyingPersonInfo.lastName,
                phoneNum: accompanyingPersonInfo.phoneNum,
                email: accompanyingPersonInfo.email,
                gender:accompanyingPersonInfo.gender,
                userID:accompanyingPersonInfo.userID,
            };

            let schoolInfo1 = {
                schoolName: schoolInfo.schoolName,
                SchoolAdministrator: schoolInfo.SchoolAdministrator,
                phoneNum: schoolInfo.phoneNum,
                Adrees: schoolInfo.Adress
            };

            var data = new ChildrenCardModel({ ChildInfo: childInfo1, FatherInfo: fatherInfo1,MotherInfo:motherInfo1,AccompanyingPersonInf:accompanyingPersonInfo1,SchoolInfo:schoolInfo1 });
            data.save();
            res.send({ success: true, error: null, info: data });
        }
    })//find according to fatherID
    
})

module.exports = router;