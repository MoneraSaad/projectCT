import React from 'react';
import { useState} from 'react';
import "./SignUp.css";
import { Form, Button, Container, Row, Col,Nav,Navbar } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
let childInfo = {
  childName: "",
  childLastName: "",
  childID: "",
  streetAdrees1: "",
  streetAdrees2: "",
  city: "",
  zipCode: "",
  gender: "",
};

let fatherInfo = {
  firstName: "",
  lastName: "",
  fatherID: "",
  phoneNum: "",
  homeAdrees: "",
  email: ""
}

let motherInfo = {
  firstName: "",
  lastName: "",
  motherID: "",
  phoneNum: "",
  homeAdrees: "",
  email: ""
}

let accompanyingPersonInfo = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  gender: "",
  userID:""
}

let schoolInfo = {
  schoolName: "",
  SchoolAdministrator: "",
  phoneNum: "",
  Adress: "",
}

function SignUp() {
  const history = useHistory();
  let SchoolAdministratorID = localStorage.getItem("userID");
  let createNewRole = localStorage.getItem("createRole");

  function handleSettings() {
    history.replace("/SettingsPageUsers");
  }

  function handleHome() {
    history.replace("/SchoolAdministratorPage");
  }

  function handleLogOut() {

    const userID = SchoolAdministratorID;

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

  function handleRegister() {
    //fetch to logout user 
    fetch('/api/users/createNewAccount', {
      method: "POST",
      body: JSON.stringify({createNewRole}),
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
      <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
        <Navbar className="mb-3" aria-label="Toolbar with Button groups">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
            <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar>

        <h1 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "30px", fontFamily: "Times New Roman", textAlign: "center" }}>Create an Account</h1>

        <Form onSubmit={handleRegister}>
          <br></br>
          <Form.Group as={Row} >

            <Form.Label column sm="2" htmlFor="firstName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>First Name: </Form.Label>
            <Col sm="4">
              <Form.Control id="firstName" name="firstName" placeholder="first Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
            </Col>
            <Form.Label column sm="2" htmlFor="lastName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Last Name: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="lastName" name="lastName" placeholder="last Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>

          </Form.Group>



          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="ID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ID: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="ID" name="ID" placeholder="ID" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
            <Form.Label column sm="2" htmlFor="phoneNumber" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Phone Number: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="userRole" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Role: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="userRole" name="userRole" placeholder="User Role" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
            <Form.Label column sm="2" htmlFor="city" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>City: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="city" name="city" placeholder="City" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
          </Form.Group>
          {/*         <Form.Text id="passwordHelpBlock" muted>
                   The Role should be one of these: 1.parent, 2.Accompanying Person,3.Driver,4.School Administrator,5.Transportation Manager,6.Vehicle Company Manager.
            </Form.Text> */}

          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="streetNum" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Home Address: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="streetNum" name="streetNum" placeholder="Home Address" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
            <Form.Label column sm="2" htmlFor="gender" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Gender: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="gender" name="gender" placeholder="Gender" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="email" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Email: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" type="email" id="email" name="email" placeholder="Email" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
            <Form.Label column sm="2" htmlFor="password" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Password: </Form.Label>
            <Col sm="4">
              <Form.Control className="form-control" id="password" name="password" type="text" placeholder="Password" required style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row}> 
           <Form.Label column sm="2" for="confirmPassword" style={{fontFamily: "Roboto", fontWeight:"bold",color:"white"}}>Confirm Password: </Form.Label>
           <Col sm="4">
             <Form.Control className="form-control" id="confirmPassword" name="confirmPassword" placeholder="confirmPassword" required  style={{borderBottom:" 2px solid orange"}}></Form.Control><br></br>
           </Col>
           </Form.Group> */}

          <Button variant="warning" size="lg" block id="Register" type="submit">Register</Button>
        </Form>
        <br></br>
        <br></br>
        {/* <p className="text-center"><a href="" onClick={handleBackBtn} >Already have an account?</a></p> */}
      </Container>


    </div>

  )

}

export default SignUp;