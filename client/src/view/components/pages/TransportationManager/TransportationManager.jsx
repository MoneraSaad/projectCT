import React from 'react';
import { useState } from 'react';
import "./TransportationManager.css";
import { Button, Container,Navbar,Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function TransportationManager() {
  const history = useHistory();


  function handleTransportationManagerSubListBtn() {
    history.replace("/TransportationManagerSubList");
  }

  function handleabsent() {
    history.replace("/TransportationManagerAbsentPage");
  }
  function handleWhatsapp() {
    let vehicleCompanyManager;
    let transportationManagerID = localStorage.getItem("userID");
    fetch('/api/users/vehicleCompanyManagerPhone', {
        method: "POST",
        body: JSON.stringify({ transportationManagerID }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                vehicleCompanyManager = data.info[0].userInfo.phoneNumber;
                window.open("https://api.whatsapp.com/send?phone=+972" + vehicleCompanyManager + "&text=&source=&data=");
            } else {
                alert("couldn't get vehicle Company Manage phone number");
            }

        });


}

  function handleTransportationManagerTrack() {
    /*  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude );
        console.log(position.coords.latitude, position.coords.longitude);
      }  */


  }

  function handleSettings(){
    history.replace("/SettingsPageUsers");
}

function handleHome() {
  history.replace("/TransportationManager");
}
function handleLogOut() {
     
  const userID = TransportationManager;

  //fetch to logout user 
  fetch('/api/users/logout', {
      method: "POST",
      body: JSON.stringify({ userID }),
      headers: {
          "Content-Type": "application/json",
      },
  })
      .then((res) => res.json())
      .then((data) => {
          if (data.success) {
              localStorage.clear();
              history.replace('/LogIn');
          }
          else {

              alert("can't log out");
          }
      });
}


  return (

    <div >
      <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
        <Navbar className="mb-3" aria-label="Toolbar with Button groups">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link href="#Settings" onClick={handleSettings} >Settings</Nav.Link>
            <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar>
        <h4 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome Transportation Manager</h4><br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleabsent} >Submit Absent Status</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" >Plan Route</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleTransportationManagerTrack} >Track Vehcile</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleTransportationManagerSubListBtn} >Subtitutes List</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact Vehicle Company Manager</Button>
        <br></br>
        <br></br>
      </Container>
    </div>
  )
}

export default TransportationManager;