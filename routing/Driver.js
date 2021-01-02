const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const DriverSchema = require('../schemas/DriverSchema');
const DriverModel = mongoose.model("DriverModel",DriverSchema);



router.post('/driverEdit',(req, res) => {
       
    const {driverInformation}=req.body;
    let array=[];
    
  
    DriverModel.find({"driverInfo.userName" : driverInformation.userName}).then(chackUserName => {
        console.log(chackUserName);
        if(chackUserName.length> 0) {
         
   
           array.push({userID:chackUserName[0].driverInfo.userID});
           array.push({userName:chackUserName[0].driverInfo.userName});
           array.push({userLastName:chackUserName[0].driverInfo.userLastName});
           array.push({userEmail:chackUserName[0].driverInfo.userEmail});
           array.push({phoneNumber:chackUserName[0].driverInfo.phoneNumber});
           array.push({userRole:chackUserName[0].driverInfo.userRole}); 
           array.push({city:chackUserName[0].driverInfo.city});
         
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            res.send({array});

           
     
        }    
       
    
    })
    } 
    )  
    router.post('/DriverAttendance',(req, res) => {
        const {workDays}=req.body;
        console.log("workDays");
        console.log(workDays);
        DriverModel.find({"driverInfo.workDays" : workDays}).then(checkWorkDays => {
            console.log(checkWorkDays);
            if(checkWorkDays.length> 0) {
            
                res.send({ success: true, error: null })
                res.end();
         
            }    else {
              
                let temp = {
                    workDays : workDays
                  
              }
        
              var data = new DriverModel({ driverInfo: temp });
              data.save(); 
              res.send({ success: false, error: "User does not exist" }); 
        
        
          
          }
        
        
        })
        } 
        )


        router.post('/driverLocation',(req, res) => {
            const {driverInformation}=req.body;
            let array=[];

            DriverModel.find({"driverInfo.userID" : driverInformation.userID}).then(checkUserID => {
                console.log(checkUserID);
                if(checkUserID.length> 0) {
                
                    array.push({lat:checkUserID[0].driverInfo.lat}); 
                    array.push({long:checkUserID[0].driverInfo.long})
                  
                     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                     res.send({array});
            
              
              }
            
            
            })
            } 
            )


        router.post('/driverShareLocation',(req, res) => {
            const {lat,long,userID}=req.body;
            DriverModel.find({"driverInfo.userID" : userID}).then(chackUserID => {
                console.log(chackUserID);
                if(chackUserID.length> 0) {
                
                    res.send({ success: true, error: null })
                    res.end();
             
                }    else {
                  
                    let temp = {
                        
                        userID:userID,
                        lat:lat,
                        long:long
                      
                  }
            
                  var data = new DriverModel({ driverInfo: temp });
                  data.save(); 
                  res.send({ success: false, error: "User does not exist" }); 
            
            
              
              }
            
            
            })
            } 
            )
 


     /*  router.post('/driverEdit',(req, res) => {
        console.log("We are here!");
    const {userID,userName,userLastName,city,userEmail,phoneNumber}=req.body;
  
  
    DriverModel.find({"driverInfo.userName" : userName}).then(chackUserName => {
        console.log(chackUserName);
        if(chackUserName.length> 0) {
        
            res.send({ success: true, error: null })
            res.end();
     
        }    else {
          
            let temp = {
                userID : userID,
                userName : userName,
                userLastName : userLastName,
                city : city,
                userEmail : userEmail,
                phoneNumber : phoneNumber,
               
          }
    
          var data = new DriverModel({ driverInfo: temp });
          data.save(); 
          res.send({ success: false, error: "User does not exist" });
      }
    
    
    })
    } 
    )    */

module.exports=router;