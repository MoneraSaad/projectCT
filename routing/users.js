const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const UserSchema = require('../schemas/UserSchema');
const UserModel = mongoose.model("UserModel", UserSchema);



router.post('/login', (req, res) => {

    const { userName, password } = req.body;
    console.log(userName);
    console.log(password);
    UserModel.find({ "userInfo.userID": userName,"userInfo.password":password }).then(docs => {
        console.log(docs);
        if (docs.length > 0) {
            console.log("docs= succuess");
            res.send({ success: true, error: null, info: docs })
            res.end();

        } else {
          /*    let temp = {
                userName: 'Aleen',
                userLastName: 'Ben Zaken',
                userID: userName,
                userEmail: 'Aleen@gmail.com',
                phoneNumber: '0534536644',
                userRole: 'parent',
                password: password,
                city: 'Haifa',
                streetNum: 'street1-70',
                gender:'Male'

            }; 

            let active1 = false; 

             var data = new UserModel({ userInfo: temp, active: active1 });
             data.save();
             checkUserName=data;
             */
            res.send({ success: false, error: "User does not exist",info: null });
        }


    })
}
)

//getting the accompanying person status 
router.post('/AccompanyingPersonAbsent', (req, res) => {
    const { checkBox1 } = req.body;
    console.log("checkBox1");
    console.log(checkBox1);
    UserModel.find({ "userInfo.checkBox1": checkBox1 }).then(checkCheckBox1 => {
        console.log(checkCheckBox1);
        if (checkCheckBox1.length > 0) {

            res.send({ success: true, error: null })
            res.end();

        } else {

            let temp = {
                checkBox1: checkBox1

            }

            var data = new UserModel({ userInfo: temp });
            data.save();
            res.send({ success: false, error: "User does not exist" });



        }


    })
}
)


router.post('/TransportationManagerAttendance', (req, res) => {
    const { checkBox1 } = req.body;
    console.log("checkBox1");
    console.log(checkBox1);
    UserModel.find({ "userInfo.checkBox1": checkBox1 }).then(checkCheckBox1 => {
        console.log(checkCheckBox1);
        if (checkCheckBox1.length > 0) {

            res.send({ success: true, error: null })
            res.end();

        } else {

            let temp = {
                checkBox1: checkBox1

            }

            var data = new UserModel({ userInfo: temp });
            data.save();
            res.send({ success: false, error: "User does not exist" });



        }


    })
}
)


module.exports = router;