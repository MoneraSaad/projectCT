import React from 'react';
import { useState} from 'react';
import "./AccompanyingPersonTrack.css";
import { Button, Container,Navbar,Nav} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
let driverInformation = {
    userID: "",
    userName: "",
    userLastName: "",
    city: "",
    userEmail: "",
    phoneNumber: "",
    userRole: ""
};


function AccompanyingPersonTrack() {

    let history = useHistory();
    let AccompanyingPerson = localStorage.getItem("userID");
    const [Driverlat, setDriverlat] = useState("");
    const [Driverlong, setDriverlong] = useState("");

    function handleStart() {


        driverInformation = {
            userID: "4325",
            userName: "",
            userLastName: "",
            city: "",
            userEmail: "",
            phoneNumber: "",
            userRole: "Driver"
        };

        fetch('/api/Driver/driverLocation', {
            method: "POST",
            body: JSON.stringify({ driverInformation }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.array != null) {
                    if (data.array.length > 0) {
    
                        setDriverlat(data.array[0].lat);
                        setDriverlong(data.array[1].long);
                        window.open("https://maps.google.com?q=" + Driverlat + "," + Driverlong);
                    }
                } else {
                    alert("couldn't track!");
                }

            });
    }

    function handleSettings(){
        history.replace("/SettingsPageAccompanyingPerson");
    }

    function handleHomePage(){
        history.replace("/AccompanyingPersonPage");
      }

      function handleLogOut() {
     
        const userID = AccompanyingPerson;
      
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
        <div>
        <Container style={{ border: "solid #ffa500", borderColor: "#ffa500",textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
        <Navbar className="mb-3" aria-label="Toolbar with Button groups">
            <Nav className="mr-auto">
                <Nav.Link href="#home" onClick={handleHomePage}>Home</Nav.Link>
                <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
        </Navbar>
        <h4 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Vehicle Track</h4><br></br>
 
            <form>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <b>
                <Button variant="warning" size="lg"  onClick={handleStart}>View Map</Button>
                </b>
            </form>

        <br></br>
        <br></br>
        </Container>
        </div>




    )

}

export default AccompanyingPersonTrack; 