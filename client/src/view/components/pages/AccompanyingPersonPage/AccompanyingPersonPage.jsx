import React from 'react';
import "./AccompanyingPersonPage.css";
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

function AccompanyingPersonPage() {
  const history = useHistory();
  let AccompanyingPerson = localStorage.getItem("userID");

  function handleAccAbsentBtn() {
    history.replace("/AccompanyingAttendance");
  }
  function handleChildrenCardsBtn() {
    history.replace("/AccompanyingPersonChildCard");
  }


  function handleAccompanyingPTrack() {
       history.replace("/AccompanyingPersonTrack"); 
  }

  function handleWhatsapp() {
    let schoolAdministratorPhone;
    fetch('/api/users/schoolAdministratorPhone', {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          schoolAdministratorPhone = data.info[0].userInfo.phoneNumber;
          window.open("https://api.whatsapp.com/send?phone=+972" + schoolAdministratorPhone + "&text=&source=&data=");
        } else {
          alert("couldn't get school Administrator phone number");
        }

      });


  }

  function handleSettings() {
    history.replace("/SettingsPageAccompanyingPerson");
  }
  function handleHomePage() {
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
      <Container fluid style={{ border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
        <Navbar className="mb-3" aria-label="Toolbar with Button groups">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={handleHomePage}>Home</Nav.Link>
            <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
            <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar>
        <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome Accompanying Person</h3><br></br>

        <Button variant="dark" size="lg" type="button" onClick={handleChildrenCardsBtn} >Children List</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleAccAbsentBtn} >Submit Attendance Status</Button>
        <br></br>
        <br></br>
        <Button variant="dark" size="lg" type="button" onClick={handleAccompanyingPTrack} >Track Vehicle </Button>
        <br></br>
        <br></br>
        {/* <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact Driver</Button>
        <br></br>
        <br></br> */}
        <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact School Administrator</Button>
        <br></br>
        <br></br>
      </Container>
    </div>
  )
}

export default AccompanyingPersonPage;