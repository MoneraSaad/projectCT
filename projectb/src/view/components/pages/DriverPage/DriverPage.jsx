import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./DriverPage.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

let driverInformation= {
    userID:"",
    userName:"",
    userLastName:"",
    city:"",
    userEmail:"",
    phoneNumber:"",
    userRole:""
};

function DriverPage() {
    const history = useHistory();

    function handleDriverAttendanceBtn(){
       history.replace("/DriverAttendancePage");

    }
 
     function EditInfo(){
         history.replace("/DriverEditInfo");
     }
function handleDriverLocation(){

    driverInformation= {
        userID:"4325",
        userName:"",
        userLastName:"",
        city:"",
        userEmail:"",
        phoneNumber:"",
        userRole:"Driver"
     }; 
     
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        /* window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude );  */
        //console.log(position.coords.latitude, position.coords.longitude);
        let lat=position.coords.latitude;
        let long=position.coords.longitude; 
        let userID=driverInformation.userID;
        console.log(lat,long,userID); 


        fetch('/api/Driver/driverShareLocation', {
            method: "POST",
            body: JSON.stringify({lat,long,userID}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
             
                    console.log(data);

               
                  }
                  else{
                    alert("Try Again..")
                  }
          
        
                

            });
}
}
  
    return(
        <div className="ctn">
             <h4>Welcome Dear Driver!!</h4>
            <form className="container">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

           {/*  <button id="DriverBtn" type="button" onClick={handleDriverAttendanceBtn}>Attendance</button><br></br>
            <button id="DriverBtn" type="button" >Navigate</button><br></br>
            <button id="DriverBtn" type="button" >Route</button><br></br>
            <button id="DriverBtn" type="button" onClick={EditInfo} >Edit Information</button><br></br> */}
 
            <a href="https://api.whatsapp.com/send?phone=+9720548145257&text=&source=&data=" class="whatsApp"  target="_blank"><i class="fa fa-whatsapp my-whatsApp">Contact</i></a>
            <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
{/* <div class="ctn"> */}


<a  class="button2 b-red rot-135" onClick={handleDriverAttendanceBtn}>Attendance</a><br></br>
<a  class="button2 b-red rot-135">Navigate</a><br></br>
<a  class="button2 b-red rot-135" onClick={handleDriverLocation}>Start Route</a><br></br>
<a  class="button2 b-red rot-135" onClick={EditInfo}>View Personal Information</a><br></br>
<br></br>





           
            </form>
           
        </div>
    )
}

export default DriverPage;