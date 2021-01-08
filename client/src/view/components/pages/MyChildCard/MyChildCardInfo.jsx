import React from 'react';
import { useState, useEffect} from 'react';
import "./MyChildCard.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row, Col, Navbar,Nav, Form } from 'react-bootstrap';

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
}

let schoolInfo = {
    schoolName: "",
    SchoolAdministrator: "",
    phoneNum: "",
    Adress: "",
}

function MyChildCardInfo() {

    let history = useHistory();
    let myParent = localStorage.getItem("userID");

    const [childData, setChildData] = useState([]);
    const [fatherData, setFatherData] = useState([]);
    const [motherData, setMotherData] = useState([]);
    const [accompanyingPersonData, setAccompanyingPersonData] = useState([]);
    const [schoolData, setSchoolData] = useState([]);
    useEffect(() => {

        fetch('/api/childrenCards/getMyChildInfo', {
            method: 'POST',
            body: JSON.stringify({ userID: localStorage.getItem("userID") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    setChildData(data.info[0]);
                    setFatherData(data.info[1]);
                    setMotherData(data.info[2]);
                    setAccompanyingPersonData(data.info[3]);
                    setSchoolData(data.info[4]);
                    childInfo.childName = data.info[0].childName;
                    childInfo.childLastName = data.info[0].childLastName;
                    childInfo.childID = data.info[0].childID;
                    childInfo.streetAdrees1 = data.info[0].streetAdrees1;
                    childInfo.streetAdrees2 = data.info[0].streetAdrees2;
                    childInfo.city = data.info[0].city;
                    childInfo.zipCode = data.info[0].zipCode;
                    childInfo.gender = data.info[0].gender;

                    fatherInfo.firstName = data.info[1].firstName;
                    fatherInfo.lastName = data.info[1].lastName;
                    fatherInfo.fatherID = data.info[1].fatherID;
                    fatherInfo.phoneNum = data.info[1].phoneNum;
                    fatherInfo.homeAdrees = data.info[1].homeAdrees;
                    fatherInfo.email = data.info[1].email;

                    motherInfo.firstName = data.info[2].firstName;
                    motherInfo.lastName = data.info[2].lastName;
                    motherInfo.fatherID = data.info[2].fatherID;
                    motherInfo.phoneNum = data.info[2].phoneNum;
                    motherInfo.homeAdrees = data.info[2].homeAdrees;
                    motherInfo.email = data.info[2].email;

                    accompanyingPersonInfo.firstName = data.info[3].firstName;
                    accompanyingPersonInfo.lastName = data.info[3].lastName;
                    accompanyingPersonInfo.phoneNum = data.info[3].phoneNum;
                    accompanyingPersonInfo.email = data.info[3].email;
                    accompanyingPersonInfo.gender = data.info[3].gender;

                    schoolInfo.schoolName = data.info[4].schoolName;
                    schoolInfo.SchoolAdministrator = data.info[4].SchoolAdministrator;
                    schoolInfo.phoneNum = data.info[4].phoneNum;
                    schoolInfo.Adress = data.info[4].Adress;

                } else {
                    setChildData([]);
                }


            })
    }, []);



    function handleHome() {
        history.replace("/ParentHomePage");
    }
    function handleSettings() {
        history.replace("/SettingsPage");

    }

    function handleLogOut() {
     
        const userID = myParent;
      
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

            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman", textAlign: "center" }}>Child Card</h3><br></br>
                <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Child Information</h5>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6" ><label >Child Name: </label> {childData.childName}</Col>

                    <Col sm="6"><label  >Child Last Name: </label> {childData.childLastName} </Col>

                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6" ><label>Child ID: </label> {childData.childID}</Col>
                    <Col sm="6"><label>Gender: </label> {childData.gender}</Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6" ><label>Child Home Address 1: </label> {childData.streetAdrees1} </Col>
                    <Col sm="6"><label>Child Home Address 2: </label> {childData.streetAdrees2} </Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6" ><label>City: </label> {childData.city}</Col>
                    <Col sm="6"><label>ZIP Code: </label> {childData.zipCode} </Col>
                </Form.Group>
                <div style={{ border: "1px solid orange" }}></div>
                <br></br>
                <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Father's Information</h5>
                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="4" ><label>First Name: </label> {fatherData.firstName}</Col>
                    <Col sm="4"><label>Last Name: </label> {fatherData.lastName} </Col>
                    <Col sm="4"><label>ID: </label> {fatherData.fatherID}</Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="4" ><label>Phone Number: </label> {fatherData.phoneNum} </Col>
                    <Col sm="4" ><label>home Address: </label> {fatherData.homeAdrees} </Col>
                    <Col sm="4" ><label>Email: </label> {fatherData.email} </Col>
                </Form.Group>
                <div style={{ border: "1px solid orange" }}></div>
                <br></br>
                <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Mother's Information</h5>
                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="4"><label>First Name: </label> {motherData.firstName}</Col>
                    <Col sm="4"><label>Last Name: </label> {motherData.lastName} </Col>
                    <Col sm="4"><label>ID: </label> {motherData.motherID}</Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="4"><label>Phone Number: </label> {motherData.phoneNum} </Col>
                    <Col sm="4"><label>home Address: </label> {motherData.homeAdrees} </Col>
                    <Col sm="4"><label>Email: </label> {motherData.email} </Col>
                </Form.Group>
                <div style={{ border: "1px solid orange" }}></div>
                <br></br>
                <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Accompanying Person Information</h5>
                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="4"><label>First Name: </label> {accompanyingPersonData.firstName}</Col>
                    <Col sm="4"><label>Last Name: </label> {accompanyingPersonData.lastName} </Col>
                    <Col sm="4"><label>Phone Number: </label> {accompanyingPersonData.phoneNum}</Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6"><label>Email: </label> {accompanyingPersonData.email} </Col>
                    <Col sm="6"><label>Gender: </label> {accompanyingPersonData.gender} </Col>
                </Form.Group>
                <div style={{ border: "1px solid orange" }}></div>
                <br></br>
                <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>School Information</h5>
                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6"><label>School Name: </label> {schoolData.schoolName}</Col>
                    <Col sm="6"><label>School Administrator: </label> {schoolData.SchoolAdministrator} </Col>
                </Form.Group>

                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6"><label>Phone Number: </label> {schoolData.phoneNum} </Col>
                    <Col sm="6"><label>Address: </label> {schoolData.Adress} </Col>
                </Form.Group>
                <br></br>
                <br></br>
            </Container>

        </div>

    )
}
export default MyChildCardInfo;