import React from 'react';

import { useState, useEffect, useRef } from 'react';
import "./AccompanyingPersonTrack.css";

let driverInformation= {
    userID:"",
    userName:"",
    userLastName:"",
    city:"",
    userEmail:"",
    phoneNumber:"",
    userRole:""
};


function AccompanyingPersonTrack() {
  

    const [Driverlat, setDriverlat] = useState("") ;
    const[Driverlong,setDriverlong] = useState("");

  /*   const start=document.querySelector("#start");
    start.addEventListener("click",() =>{
        navigator.geolocation.getCurrentPosition(
            data=>{
                console.log(data)
            }
        )
    }) */

        
    //var x = document.getElementById("demo");

function handleStart() {

    
    driverInformation= {
        userID:"4325",
        userName:"",
        userLastName:"",
        city:"",
        userEmail:"",
        phoneNumber:"",
        userRole:"Driver"
     };  
     fetch('/api/Driver/driverLocation', {
        method: "POST",
        body: JSON.stringify({driverInformation}),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            
            if(data.array!=null){
                if(data.array.length>0){
                    console.log(data.array[0])
                    console.log(data.array[1])
                    setDriverlat(data.array[0].lat);
                    setDriverlong(data.array[1].long)
                }
            }
           
      

            

        });
        window.open("https://maps.google.com?q="+Driverlat+","+Driverlong);
/* let userID=driverInformation.userID; */
//console.log(drivrID);
   /*  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude ); */
        //console.log(position.coords.latitude, position.coords.longitude);
 /*        let lat=position.coords.latitude;
        let long=position.coords.longitude; */
        /* console.log(lat,long); */
        
      }
  /*   var lat=32.8825153;
    var long=35.424482999999995; */


    
  
 
    return(
        <div className="Container">
        <h4>Welcome </h4>
       <form>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
     <b>
       <button id="start" type="button" onClick={handleStart}>View Map</button><br></br>
       </b>
    
       
      
      
       </form>
       
   </div> 
 



    )
 
}



export default AccompanyingPersonTrack; 