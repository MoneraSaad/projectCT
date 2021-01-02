import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./TransportationManager.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function TransportationManager() {
    const history = useHistory();


    function handleTransportationManagerSubListBtn(){
        history.replace("/TransportationManagerSubList");
    }

    function handleabsent(){
      history.replace("/TransportationManagerAbsentPage");
    }
  
function handleTransportationManagerTrack(){
  /*  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude );
      console.log(position.coords.latitude, position.coords.longitude);
    }  */
   
  
  }
    return(
         <div className="TransportationManagerContainer">
            <h4>Welcome dear Transportation Manager</h4>

           {/*   <label  class="Select" for="Choose contact">Choose contact:</label>   
             <select class="Select" name="Contact" id="contact">
             <option class="Select" value="Driver" >Driver</option>
             <option class="Select" value="Accompanying Person" >Accompanying Person</option>
             </select> */}
             


            <a href="https://api.whatsapp.com/send?phone=+9720548145257&text=&source=&data=" class="whatsApp" target="_blank"><i class="fa fa-whatsapp my-whatsApp">Contact</i></a>
            <button class="TransportationManagerBtn" id="TransportationManagerBtn" type="button" onClick={handleabsent} >Submit Absent Status</button><br></br>
            <button class="TransportationManagerBtn" id="TransportationManagerBtn" type="button" >Plan Route</button><br></br>
            <button class="TransportationManagerBtn" id="TransportationManagerBtn" type="button" onClick={handleTransportationManagerTrack} >Track Vehcile</button><br></br>
            <button class="TransportationManagerBtn" id="TransportationManagerBtn" type="button" onClick={handleTransportationManagerSubListBtn} >Subtitutes List</button><br></br>
            
 
 

           {/*  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
       <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
     </nav> */}

        </div>
    )
}

export default TransportationManager;