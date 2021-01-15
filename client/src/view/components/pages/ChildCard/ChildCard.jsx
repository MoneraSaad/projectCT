import React from 'react';
import { useState, useEffect} from 'react';
import "./ChildCard.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row, Col, Navbar,Nav, Form } from 'react-bootstrap';

function ChildCard() {
    let role=localStorage.getItem("userRole");

    let history = useHistory();
    const [childData, setChildData] = useState([]);
    const [fatherData, setFatherData] = useState([]);
    const [motherData, setMotherData] = useState([]);
    const [accompanyingPersonData, setAccompanyingPersonData] = useState([]);
    const [schoolData, setSchoolData] = useState([]);
    useEffect(() => {

        fetch('/api/childrenCards/getChildInfo', {
            method: 'POST',
            body: JSON.stringify({childNum:localStorage.getItem("childCardNum")}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setChildData(data.info[0]);
                    setFatherData(data.info[1]);
                    setMotherData(data.info[2]);
                    setAccompanyingPersonData(data.info[3]);
                    setSchoolData(data.info[4]);

                } else {
                    alert("can't get child card data");
                    setChildData([]);
                }


            })
    }, []);



    function handleHome() {
        if(role==="Accompanying Person"){
            history.replace("/AccompanyingPersonChildCard");
        }
        if(role==="School Administrator"){
            history.replace("/AllChildrenCards");
        }
    
    }
   
   
    return (

        <div>

            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHome}>Close</Nav.Link>
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
                <Form.Group as={Row} style={{ color: "white" }}>
                    <Col sm="6" ><label>Disability: </label> {childData.disabilityType}</Col>
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
                    <Col sm="6"><label>School Phone Number: </label> {schoolData.phoneNum} </Col>
                    <Col sm="6"><label>Address: </label> {schoolData.Adress} </Col>
                </Form.Group>
                <br></br>
                <br></br>
            </Container>

        </div>

    )
}
export default ChildCard;