import React from 'react';
import { useState, useEffect } from 'react';
import "./SettingsPageUsers.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Row, Col, Navbar,Nav, Form } from 'react-bootstrap';
let personalInformation = {
    userName: "",
    userLastName: "",
    userID: "",
    userEmail: "",
    phoneNumber: "",
    userRole: "",
    password: "",
    city: "",
    streetNum: "",
    gender: "",
}
function SettingsPageUsers() {
    let history = useHistory();
    let userID = localStorage.getItem("userID");
    const [personalInfo, setpersonalInfo] = useState([]);
    useEffect(() => {
        fetch('/api/users/getMyInfo', {
            method: 'POST',
            body: JSON.stringify({ userID: localStorage.getItem("userID") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setpersonalInfo(data.info[0].userInfo);
                } else {
                    alert("couldn't get personal information");
                    setpersonalInfo([]);
                }


            })
    }, []);

    /*     personalInformation.phoneNumber=personalInfo.phoneNumber;
         personalInformation.city=personalInfo.city;
         personalInformation.streetNum=personalInfo.streetNum;
         personalInformation.userEmail=personalInfo.userEmail;
         personalInformation.password=personalInfo.password; */

    personalInformation.userName = personalInfo.userName;
    personalInformation.userLastName = personalInfo.userLastName;
    personalInformation.userID = personalInfo.userID;
    personalInformation.userRole = personalInfo.userRole;
    personalInformation.gender = personalInfo.gender;


    function onPhoneChange(e) {
        if (e.target.value.length > 0) {
            let value1 = e.target.value;
            personalInformation.phoneNumber = value1;
        } else {
            personalInformation.phoneNumber = personalInfo.phoneNumber;
            alert("enter valid phone number with 10 digits");
        }
    }

    function onCityChange(e) {

        if (e.target.value.length > 0) {
            let value2 = e.target.value;
            personalInformation.city = value2;
        } else {
            personalInformation.city = personalInfo.city;
            alert("empty city name");
        }
    }

    function onHomeAddressChange(e) {

        if (e.target.value.length > 0) {
            let value3 = e.target.value;
            personalInformation.streetNum = value3;
        } else {
            personalInformation.streetNum = personalInfo.streetNum;
            alert("empty Home Address");
        }
    }

    function onEmailChange(e) {

        if (e.target.value.length > 0) {
            let value4 = e.target.value;
            personalInformation.userEmail = value4;
        } else {
            personalInformation.userEmail = personalInfo.userEmail;
            alert("empty Email");
        }
    }

    function onPasswordChange(e) {

        if (e.target.value.length > 0) {
            let value5 = e.target.value;
            personalInformation.password = value5;
        } else {
            personalInformation.password = personalInfo.password;
            alert("empty Password");
        }
    }


    function handleEdit() {

        if (personalInformation.phoneNumber.length === 0) {
            personalInformation.phoneNumber = personalInfo.phoneNumber;
        }
        if (personalInformation.userEmail.length === 0) {
            personalInformation.userEmail = personalInfo.userEmail;
        }
        if (personalInformation.password.length === 0) {
            personalInformation.password = personalInfo.password;
        }
        if (personalInformation.city.length === 0) {
            personalInformation.city = personalInfo.city;
        }
        if (personalInformation.streetNum.length === 0) {
            personalInformation.streetNum = personalInfo.streetNum;
        }

        fetch('/api/users/editPersonalInfoUsers', {
            method: 'POST',
            body: JSON.stringify({ userID, personalInformation }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setpersonalInfo(personalInformation);
                    alert("Successfully updated You're Personal Information");

                } else {
                    alert("can't update your personal Information");
                }
            })
    }
    function handleLogOut() {

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

    function handleHomePage(){
        let role = localStorage.getItem("userRole");
        if(role==='Vehicle Company Manager'){
            history.replace('/VehicleCompanyManager');
        }
        if(role==='Transportation Manager'){
            history.replace('/TransportationManager');
        }
        if(role==='School Administrator'){
            history.replace('/SchoolAdministratorPage');
        }
        if(role==='Driver'){
            history.replace('/DriverPage');
        }

    }
    return (
        <div>

            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHomePage}>Home</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h1 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "30px", fontFamily: "Times New Roman", textAlign: "center" }}>Settings</h1>
                <br></br>
                <Form.Text id="passwordHelpBlock" muted style={{ textAlign: "center" }}>
                    You can update the following feilds: city,phone number, Home Address ,Email,Password
            </Form.Text>
                <br></br>
                <br></br>
                <Form.Group as={Row} >

                    <Form.Label column sm="2" htmlFor="firstName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}  >First Name: </Form.Label>
                    <Col sm="4">
                        <Form.Control id="firstName" name="firstName" placeholder={personalInfo.userName} readOnly style={{ borderBottom: " 2px solid orange" }} ></Form.Control>
                    </Col>
                    <Form.Label column sm="2" htmlFor="lastName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Last Name: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="lastName" name="lastName" placeholder={personalInfo.userLastName} readOnly style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
                    </Col>

                </Form.Group>



                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="ID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ID: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="ID" name="ID" placeholder={personalInfo.userID} readOnly style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
                    </Col>
                    <Form.Label column sm="2" htmlFor="phoneNumber" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }} >Phone Number: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="phoneNumber" name="phoneNumber" placeholder={personalInfo.phoneNumber} style={{ borderBottom: " 2px solid orange" }} onChange={onPhoneChange} ></Form.Control><br></br>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="userRole" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Role: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="userRole" name="userRole" placeholder={personalInfo.userRole} readOnly style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
                    </Col>
                    <Form.Label column sm="2" htmlFor="city" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>City: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="city" name="city" placeholder={personalInfo.city} style={{ borderBottom: " 2px solid orange" }} onChange={onCityChange}></Form.Control><br></br>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="streetNum" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Home Address: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="streetNum" name="streetNum" placeholder={personalInfo.streetNum} style={{ borderBottom: " 2px solid orange" }} onChange={onHomeAddressChange}></Form.Control><br></br>
                    </Col>
                    <Form.Label column sm="2" htmlFor="gender" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Gender: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="gender" name="gender" placeholder={personalInfo.gender} readOnly style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="email" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Email: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" type="email" id="email" name="email" placeholder={personalInfo.userEmail} style={{ borderBottom: " 2px solid orange" }} onChange={onEmailChange}></Form.Control><br></br>
                    </Col>
                    <Form.Label column sm="2" htmlFor="password" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Password: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="password" name="password" type="text" placeholder={personalInfo.password} style={{ borderBottom: " 2px solid orange" }} onChange={onPasswordChange}></Form.Control><br></br>
                    </Col>
                </Form.Group>

                {/*               <Form.Group as={Row}>
                    <Form.Label column sm="2" for="confirmPassword" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Confirm Password: </Form.Label>
                    <Col sm="4">
                        <Form.Control className="form-control" id="confirmPassword" name="confirmPassword" placeholder={personalInfo.password} style={{ borderBottom: " 2px solid orange" }}></Form.Control><br></br>
                    </Col>
                </Form.Group> */}

                <Button variant="warning" size="lg" block id="Edit" onClick={handleEdit}>Edit</Button>


            </Container>


        </div>

    )
}
export default SettingsPageUsers;