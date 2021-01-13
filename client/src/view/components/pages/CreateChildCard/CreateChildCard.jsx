
import React from 'react';
import { useState } from 'react';
import "./CreateChildCard.css";
import { Form, Button, Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
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
    userID: ""
}

let schoolInfo = {
    schoolName: "",
    SchoolAdministrator: "",
    phoneNum: "",
    Adress: "",
}

function CreateChildCard() {
    const history = useHistory();
    let SchoolAdministratorID = localStorage.getItem("userID");

    function handleCreate(e) {
        e.preventDefault();
        const { childName, childLastName, childID, streetAdrees1, streetAdrees2, city, zipCode, Gender1
            , firstName, lastName, fatherID, phoneNum, homeAdrees, email,
            firstName1, lastName1, motherID, phoneNum1, homeAdrees1, email1
            , firstName2, lastName2, phoneNum2, email2, gender2, userID,
            schoolName, SchoolAdministrator, phoneNum3, Adress } = e.target.elements;

        //childInfo
        childInfo.childName = childName.value;
        childInfo.childLastName = childLastName.value;
        childInfo.childID = childID.value;
        childInfo.streetAdrees1 = streetAdrees1.value;
        childInfo.streetAdrees2 = streetAdrees2.value;
        childInfo.city = city.value;
        childInfo.zipCode = zipCode.value;
        childInfo.gender = Gender1.value;

        console.log(childInfo);

        //fatherInfo
        fatherInfo.firstName = firstName.value;
        fatherInfo.lastName = lastName.value;
        fatherInfo.fatherID = fatherID.value;
        fatherInfo.phoneNum = phoneNum.value;
        fatherInfo.homeAdrees = homeAdrees.value;
        fatherInfo.email = email.value;

        console.log(fatherInfo);

        //motherInfo
        motherInfo.firstName = firstName1.value;
        motherInfo.lastName = lastName1.value;
        motherInfo.motherID = motherID.value;
        motherInfo.phoneNum = phoneNum1.value;
        motherInfo.homeAdrees = homeAdrees1.value;
        motherInfo.email = email1.value;

        console.log(motherInfo);

        //accompanyingPersonInfo
        accompanyingPersonInfo.firstName = firstName2.value;
        accompanyingPersonInfo.lastName = lastName2.value;
        accompanyingPersonInfo.phoneNum = phoneNum2.value;
        accompanyingPersonInfo.email = email2.value;
        accompanyingPersonInfo.gender = gender2.value;
        accompanyingPersonInfo.userID = userID.value;

        console.log(accompanyingPersonInfo);

        //schoolInfo
        schoolInfo.schoolName = schoolName.value;
        schoolInfo.SchoolAdministrator = SchoolAdministrator.value;
        schoolInfo.phoneNum3 = phoneNum3.value;
        schoolInfo.Adress = Adress.value;

        console.log(schoolInfo);

        //fetch to login user 
        fetch('/api/childrenCards/createChildCard', {
            method: "POST",
            body: JSON.stringify({ childInfo, fatherInfo, motherInfo, accompanyingPersonInfo, schoolInfo }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    console.log(data);
                    alert("Successfully created Child card");
                }
                else {
                    alert("!!Child card already exists!!");
                }


            });



    }

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

                <Form onSubmit={handleCreate}>
                    <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Child Information</h5>

                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="childName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Child Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="childName" name="childName" placeholder="child Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="ChildLastName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Child Last Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="ChildLastName" name="ChildLastName" placeholder="Child Last Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="ChildID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Child ID: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="ChildID" name="ChildID" placeholder="Child ID" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="Gender1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Gender: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="Gender1" name="Gender1" placeholder="Gender" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>


                        <Form.Label column="true" sm="2" htmlFor="streetAdrees1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Child Home Address 1: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="streetAdrees1" name="streetAdrees1" placeholder="Child Home Address 1" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="streetAdrees2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Child Home Address 2: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="streetAdrees2" name="streetAdrees2" placeholder="Child Home Address 2" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="City" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>City: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="City" name="City" placeholder="City" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="zipCode" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ZIP Code: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="zipCode" name="zipCode" placeholder="ZIP Code" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>
                    <div style={{ border: "1px solid orange" }}></div>
                    <br></br>
                    <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Father's Information</h5>
                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="firstName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>First Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="firstName" name="firstName" placeholder="First Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="lastName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Last Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="lastName" name="lastName" placeholder="Last Name" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                     </Form.Group>
                     <Form.Group as={Row} style={{ color: "white" }}>
                        <Form.Label column="true" sm="2" htmlFor="fatherID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ID: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="fatherID" name="fatherID" placeholder="ID" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                        
                        <Form.Label column="true" sm="2" htmlFor="phoneNum" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Phone Number: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="phoneNum" name="phoneNum" placeholder="Phone Number" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="homeAdrees" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>home Address: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="homeAdrees" name="homeAdrees" placeholder="home Address" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="email" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Email: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="email" name="email" placeholder="Email" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <div style={{ border: "1px solid orange" }}></div>
                    <br></br>
                    <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Mother's Information</h5>
                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="firstName1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>First Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="firstName1" name="firstName1" placeholder="First Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="lastName1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Last Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="lastName1" name="lastName1" placeholder="Last Name" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="motherID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ID: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="motherID" name="motherID" placeholder="ID" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                        <Form.Label column="true" sm="2" htmlFor="phoneNum1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Phone Number: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="phoneNum1" name="phoneNum1" placeholder="Phone Number" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>
                        <Form.Label column="true" sm="2" htmlFor="homeAdrees1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>home Address: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="homeAdrees1" name="homeAdrees1" placeholder="home Address" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="email1" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Email: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="email1" name="email1" placeholder="Email" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>
                    <div style={{ border: "1px solid orange" }}></div>
                    <br></br>
                    <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>Accompanying Person Information</h5>
                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="firstName2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>First Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="firstName2" name="firstName2" placeholder="First Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="lastName2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Last Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="lastName2" name="lastName2" placeholder="Last Name" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} style={{ color: "white" }}> 
                        <Form.Label column="true" sm="2" htmlFor="userID" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>ID: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="userID" name="userID" placeholder="ID" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="phoneNum2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Phone Number: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="phoneNum2" name="phoneNum2" placeholder="Phone Number" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>
                        <Form.Label column="true" sm="2" htmlFor="email2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Email: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="email2" name="email2" placeholder="Email" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="gender2" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Gender: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="gender2" name="gender2" placeholder="Gender" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                    </Form.Group>
                    <div style={{ border: "1px solid orange" }}></div>
                    <br></br>
                    <h5 style={{ fontWeight: "bold", color: "white", textDecoration: "underline", fontFamily: "Times New Roman" }}>School Information</h5>
                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="schoolName" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>School Name: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="schoolName" name="schoolName" placeholder="School Name" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="SchoolAdministrator" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>School Administrator: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="SchoolAdministrator" name="SchoolAdministrator" placeholder="School Administrator" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{ color: "white" }}>

                        <Form.Label column="true" sm="2" htmlFor="phoneNum3" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>School Phone Number: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="phoneNum3" name="phoneNum3" placeholder="School Phone Number" required style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>

                        <Form.Label column="true" sm="2" htmlFor="Adress" style={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}>Address: </Form.Label>
                        <Col sm="4">
                            <Form.Control id="Adress" name="Adress" placeholder="Address" style={{ borderBottom: " 2px solid orange" }}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Button variant="warning" size="lg" block id="Register" type="submit">Register</Button>
                </Form>
                <br></br>
                <br></br>
            </Container>
        </div>

    )

}

export default CreateChildCard;