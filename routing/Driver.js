const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const DriverSchema = require('../schemas/DriverSchema');
const DriverModel = mongoose.model("DriverModel", DriverSchema);

router.post('/driverShareLocation', (req, res) => {
    const { lat, long, userID } = req.body;
    DriverModel.find({ "driverInfo.userID": userID }).then(chackUserID => {
        console.log(chackUserID);
        if (chackUserID.length > 0) {
            chackUserID[0].driverInfo.long = long;
            chackUserID[0].driverInfo.lat = lat;
            chackUserID[0].save();
            return (res.send({ success: true, error: null, info: null }));
        }

    })
}
)

router.post('/driverLocation', (req, res) => {
    const { driverInformation } = req.body;
    let array = [];

    DriverModel.find({ "driverInfo.userID": driverInformation.userID }).then(checkUserID => {
        console.log(checkUserID);
        if (checkUserID.length > 0) {

            array.push({
                lat: checkUserID[0].driverInfo.lat,
                long: checkUserID[0].driverInfo.long
            });

            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            res.send({ array });

        }
    })
}
)

module.exports = router;