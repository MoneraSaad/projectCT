const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const ChildrenSchema = require('../schemas/ChildrenSchema');
const ChildModel = mongoose.model("ChildModel", ChildrenSchema);



router.post('/child', (req, res) => {
   
    const {ChildInformation} = req.body;
    let array=[];
    ChildModel.find({ "ChildInfo.AccompanyingPersonName": ChildInformation.AccompanyingPersonName }).then( checkAccompanyingPersonName => {
           /*  console.log(checkAccompanyingPersonName); */
            if (checkAccompanyingPersonName.length > 0) {
               
      for(let x=0;x<checkAccompanyingPersonName.length;x++){

                    array.push({childID:checkAccompanyingPersonName[x].ChildInfo.childID ,
                        childName:checkAccompanyingPersonName[x].ChildInfo.childName,
                        childLastName:checkAccompanyingPersonName[x].ChildInfo.childLastName,
                        FatherName:checkAccompanyingPersonName[x].ChildInfo.FatherName,
                        MotherName:checkAccompanyingPersonName[x].ChildInfo.MotherName,
                        Birthday:checkAccompanyingPersonName[x].ChildInfo.Birthday,
                        disabilityType:checkAccompanyingPersonName[x].ChildInfo.disabilityType,
                        location1:checkAccompanyingPersonName[x].ChildInfo.location1,
                        location2:checkAccompanyingPersonName[x].ChildInfo.location2,
                        AccompanyingPersonName:checkAccompanyingPersonName[x].ChildInfo.AccompanyingPersonName 
                    });
                }
                  
                  


                    res.send({array});
                    

                

                    }  
               

        })
    } 
)










/* router.post('/child', (req, res) => {
   
    const {childID, childName,childLastName,FatherName, MotherName, Birthday,disabilityType,location1,location2,AccompanyingPersonName} = req.body;

    ChildModel.find({ "ChildInfo.childName": childName }).then( checkChildName => {
            console.log(checkChildName);
            if (checkChildName.length > 0) {
               
                        res.send({ success: true, error: null })
                        res.end();

                    }    else {
                          let temp = {
                            childID:childID,
                            childName:childName,
                            childLastName:childLastName,
                            FatherName:FatherName,
                            MotherName:MotherName,
                            Birthday:Birthday,
                            disabilityType:disabilityType,
                            location1:location1,
                            location2:location2,
                            AccompanyingPersonName:AccompanyingPersonName

                            
                        }
            
                        var data = new ChildModel({ ChildInfo: temp });
                        data.save(); 
                        res.send({ success: false, error: "User does not exist" });
                    }
               

        })
    } 
)
 */
module.exports = router;