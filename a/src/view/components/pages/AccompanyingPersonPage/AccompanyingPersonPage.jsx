import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./AccompanyingPersonPage.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function AccompanyingPersonPage() {
    const history = useHistory();
     
    function handleAccAbsentBtn(){
        history.replace("/AccompanyingPersonAbsentPage");
    }
    function handleChildrenCardsBtn(){
        history.replace("/AccompanyingPersonChildCard");
    }


    function handleAccompanyingPTrack(){
    /*     history.replace("/AccompanyingPersonTrack"); */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude );
        console.log(position.coords.latitude, position.coords.longitude);
      }

    }

    return(
        
        <div>
          <form className="AccompanyingPersonPageContainer">  
            <h4>Welcome Dear Accompanying person:)</h4>
           
  
            <button className="AccompanyingPersonBtn" id="AccompanyingPersonBtn" type="button" onClick={handleChildrenCardsBtn} >Children Cards</button><br></br>
            <button className="AccompanyingPersonBtn" id="AccompanyingPersonBtn" type="button" onClick={handleAccAbsentBtn} >Submit Absent Status</button><br></br>
            <button className="AccompanyingPersonBtn" id="AccompanyingPersonBtn" type="button" onClick={handleAccompanyingPTrack} >Track Vehicle </button><br></br>
            <a href="https://api.whatsapp.com/send?phone=+9720548145257&text=&source=&data=" class="whatsApp"  target="_blank"><i class="fa fa-whatsapp my-whatsApp">Contact</i></a>
            
            </form>
        </div>
    )
}

export default AccompanyingPersonPage;