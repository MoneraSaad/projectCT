const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const UserSchema = require('../schemas/UserSchema');
const UserModel = mongoose.model("UserModel", UserSchema);
const ChildrenCardSchema = require('../schemas/ChildrenCardSchema');
const ChildrenCardModel = mongoose.model("ChildrenCardModel", ChildrenCardSchema);


router.post('/login', (req, res) => {

    const { userID, password } = req.body;

    UserModel.find({ "userInfo.userID": userID, "userInfo.password": password }).then(docs => {

        if (docs.length > 0) {
            docs[0].active = true;
            docs[0].save();
            res.send({ success: true, error: null, info: docs });
            res.end();

        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }


    })
}
)

//logout
router.post('/logout', (req, res) => {

    const { userID } = req.body;

    UserModel.find({ "userInfo.userID": userID }).then(docs => {

        if (docs.length > 0) {
            docs[0].active = false;
            docs[0].save();
            res.send({ success: true, error: null });
            res.end();

        } else {
            res.send({ success: false, error: true });
        }


    })
}
)

//editPersonalInfoUsers
router.post('/editPersonalInfoUsers', (req, res) => {

    const { userID, personalInformation } = req.body;
    UserModel.find({ "userInfo.userID": userID }).then(docs => {
        if (docs.length > 0) {

            docs[0].userInfo.phoneNumber = personalInformation.phoneNumber;
            docs[0].userInfo.userEmail = personalInformation.userEmail;
            docs[0].userInfo.password = personalInformation.password;
            docs[0].userInfo.city = personalInformation.city;
            docs[0].userInfo.streetNum = personalInformation.streetNum;
            docs[0].save();
            res.send({ success: true, error: null, info: docs });
            res.end();

        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }//end if else 1


    })
}
)


//editPersonalInfoForParent
router.post('/editPersonalInfo', (req, res) => {

    const { userID, personalInformation } = req.body;
    UserModel.find({ "userInfo.userID": userID }).then(docs => {
        if (docs.length > 0) {

            docs[0].userInfo.phoneNumber = personalInformation.phoneNumber;
            docs[0].userInfo.userEmail = personalInformation.userEmail;
            docs[0].userInfo.password = personalInformation.password;
            docs[0].userInfo.city = personalInformation.city;
            docs[0].userInfo.streetNum = personalInformation.streetNum;

            docs[0].save();

            ChildrenCardModel.find({ "FatherInfo.fatherID": userID }).then(docs2 => {
                if (docs2.length > 0) {

                    docs2[0].FatherInfo.phoneNum = personalInformation.phoneNumber;
                    docs2[0].FatherInfo.homeAdrees = personalInformation.streetNum;
                    docs2[0].FatherInfo.email = personalInformation.userEmail;
                    docs2[0].ChildInfo.streetAdrees1 = personalInformation.streetNum;
                    docs2[0].ChildInfo.city = personalInformation.city;
                    docs2[0].save();
                    res.send({ success: true, error: null, info: docs2 })
                    res.end();
                } else {
                    ChildrenCardModel.find({ "MotherInfo.motherID": userID }).then(docs4 => {

                        if (docs4.length > 0) {

                            docs4[0].MotherInfo.phoneNum = personalInformation.phoneNumber;
                            docs4[0].MotherInfo.homeAdrees = personalInformation.streetNum;
                            docs4[0].MotherInfo.email = personalInformation.userEmail;
                            docs4[0].ChildInfo.streetAdrees2 = personalInformation.streetNum;
                            docs4[0].ChildInfo.city = personalInformation.city;
                            docs4[0].save();
                            res.send({ success: true, error: null, info: docs4 })
                            res.end();
                        } else {
                            res.send({ success: false, error: true, info: null });
                            res.end();
                        }//end if else5

                    })//end find mother
                }//end if else 2

            })//find father
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }//end if else 1


    })
}
)

//editPersonalInfoForAccompanyingPerson
router.post('/editPersonalInfoForAccompanyingPerson', (req, res) => {

    const { userID, personalInformation } = req.body;
    UserModel.find({ "userInfo.userID": userID }).then(docs => {
        if (docs.length > 0) {

            docs[0].userInfo.phoneNumber = personalInformation.phoneNumber;
            docs[0].userInfo.userEmail = personalInformation.userEmail;
            docs[0].userInfo.password = personalInformation.password;
            docs[0].userInfo.city = personalInformation.city;
            docs[0].userInfo.streetNum = personalInformation.streetNum;

            docs[0].save();

            ChildrenCardModel.find().then(docs2 => {
                if (docs2.length > 0) {
                    docs2.map((item, index) => {
                        item.AccompanyingPersonInfo.phoneNum = personalInformation.phoneNumber;
                        item.AccompanyingPersonInfo.email = personalInformation.userEmail;
                        item.save();
                    })
                    res.send({ success: true, error: null, info: docs2 })
                    res.end();

                } else {
                    res.send({ success: false, error: true, info: null });
                    res.end();
                }//end if else5

            })//find father
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }//end if else 1


    })
}
)


//getMyInfo
router.post('/getMyInfo', (req, res) => {

    const { userID } = req.body;
    UserModel.find({ "userInfo.userID": userID }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: true, error: null, info: docs });
            res.end();

        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }


    })
}
)
//saving the accompanying person status 
router.post('/AccompanyingAttendance', (req, res) => {
    const { myCheckBox, AccompanyingPerson } = req.body;

    UserModel.find({ "userInfo.userID": AccompanyingPerson }).then(docs => {
        if (docs.length > 0) {
            UserModel.updateOne({ "userInfo.userID": AccompanyingPerson }, { "userInfo.checkBox1": myCheckBox }).then(docs2 => {
                if (docs2) {
                    res.send({ success: true, error: null, info: docs });
                    res.end();
                } else {
                    res.send({ success: false, error: true, info: null });
                    res.end();
                }
            })
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }
    })
}
)

//saving the child status 
router.post('/mychildAttendance', (req, res) => {
    const { myCheckBox, myParentID} = req.body;
    ChildrenCardModel.find({ "FatherInfo.fatherID": myParentID }).then(docs => {
        if (docs.length > 0) {
 
            let myChildID = docs[0].ChildInfo.childID;
            ChildrenCardModel.updateOne({ "ChildInfo.childID": myChildID }, { "ChildInfo.checkBox1": myCheckBox }).then(docs2 => {
                if (docs2) {
                    res.send({ success: true, error: null, info: docs2 });
                    res.end();
                } else {
                    res.send({ success: false, error: true, info: null });
                    res.end();
                }
            })
        } else {
            ChildrenCardModel.find({ "MotherInfo.motherID": myParentID }).then(docs3=> {
                if (docs3.length > 0) {
                    let myChildID = docs3[0].ChildInfo.childID;
                    ChildrenCardModel.updateOne({ "ChildInfo.childID": myChildID }, { "ChildInfo.checkBox1": myCheckBox }).then(docs4 => {
                        if (docs4) {
                            res.send({ success: true, error: null, info: docs4 });
                            res.end();
                        } else {
                            res.send({ success: false, error: true, info: null });
                            res.end();
                        }
                    })
                } else {
                    res.send({ success: false, error: true, info: null });
                    res.end();
                }
            })
        }
    })
}
)

router.post('/transportationManagetPhone', (req, res) => {
    const { vehicleCompanyManagerID } = req.body;

    let userRole1 = "Transportation Manager";

    UserModel.find({ "userInfo.userRole": userRole1 }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: true, error: null, info: docs });


        } else {
            res.send({ success: false, error: true, info: null });
        }


    })
}
)

//vehicleCompanyManagerPhone
router.post('/vehicleCompanyManagerPhone', (req, res) => {
    const { transportationManagerID } = req.body;

    let userRole1 = "Vehicle Company Manager";

    UserModel.find({ "userInfo.userRole": userRole1 }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: true, error: null, info: docs });


        } else {
            res.send({ success: false, error: true, info: null });
        }


    })
}
)

//vehicleCompanyManagerPhone
router.post('/schoolAdministratorPhone', (req, res) => {
    // const { transportationManagerID } = req.body;

    let userRole1 = "School Administrator";

    UserModel.find({ "userInfo.userRole": userRole1 }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: true, error: null, info: docs });


        } else {
            res.send({ success: false, error: true, info: null });
        }


    })
}
)


//register
router.post('/register', (req, res) => {

    const { personalInformation } = req.body;

    UserModel.find({ "userInfo.userID": personalInformation.userID }).then(docs => {

        if (docs.length > 0) {
            res.send({ success: false, error: true, info: null });
            res.end();

        } else {
            let newUser = {
                userName: personalInformation.userName,
                userLastName: personalInformation.userLastName,
                userID: personalInformation.userID,
                userEmail: personalInformation.userEmail,
                phoneNumber: personalInformation.phoneNumber,
                userRole: personalInformation.userRole,
                password: personalInformation.password,
                city: personalInformation.city,
                streetNum: personalInformation.streetNum,
                gender: personalInformation.gender,
            }
            let active1 = false;
            var data = new UserModel({ userInfo: newUser, active: active1 });
            data.save();
            res.send({ success: true, error: false, info: data });
        }


    })
}
)

//getChildrensCards for the school Administrator
router.post('/getAccompaningsList', (req, res) => {
    let role="Accompanying Person";
    let accompanyingsInformation = [];
    UserModel.find({"userInfo.userRole":role}).then(docs => {

        if (docs.length > 0) {
            docs.map((item, index) => {
                accompanyingsInformation.push({
                    userName: item.userInfo.userName,
                    userLastName: item.userInfo.userLastName,
                    userID: item.userInfo.userID,
                    gender: item.userInfo.gender,
                    AccompanyingAttendance:item.userInfo.checkBox1,
                    phoneNumber: item.userInfo.phoneNumber,
                });
            })
            res.send({ success: true, error: null, info: accompanyingsInformation });
            res.end();
        } else {
            res.send({ success: false, error: true, info: null });
            res.end();
        }

    })
}
)
module.exports = router;