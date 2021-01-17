import React from 'react';
import { useState, useEffect } from 'react';
import "./AccompanyingPersonChildCard.css";
import { Container, Navbar, Nav, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function AccompanyingPersonChildCard() {
    const history = useHistory();
    let AccompanyingPerson = localStorage.getItem("userID");
    localStorage.removeItem("childCardNum");
    const [childrenData, setChildrenData] = useState([]);
    let arrayAttendance=[];
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var FullDate = (date + '/' + month + '/' + year);
    useEffect(() => {
       
        fetch('/api/childrenCards/getAllChildrensCards', {
            method: 'POST',
            body: JSON.stringify({ AccompanyingPerson:localStorage.getItem("userID") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    setChildrenData(data.info);
                } else {
                    setChildrenData([]);
                    alert("you don't have any assigned children yet");
                }
            })
    }, []);

    childrenData.map((check, index) => {
        if(check.checkBox1[index]===FullDate){
        arrayAttendance[index]="Attend";
        }else{
            arrayAttendance[index]="Absent";
        }
    })


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

    function handleFatherCall(e) {
        const fatherPhone=e.target.id;
       window.open("https://api.whatsapp.com/send?phone=+972" + fatherPhone + "&text=&source=&data=");
    }

    function handleMotherCall(e) {
        const motherPhone=e.target.id;
        window.open("https://api.whatsapp.com/send?phone=+972" + motherPhone + "&text=&source=&data=");
    }

    function handleChildCard(e){
        let theChildID=e.target.id;
        localStorage.removeItem("childCardNum");
        localStorage.setItem("childCardNum",theChildID);
        history.replace("/ChildCard");
    }

    

    const renderChildren = (Child, index) => {
        return (
                <tr key={index} >
                    <td>{index + 1}</td>
                    <td>{Child.childName}</td>
                    <td>{Child.childLastName}</td>
                    <td>{Child.childID}</td>
                    <td>{Child.gender}</td>
                    <td>{arrayAttendance[index]}</td>
                    {/* <td id={Child.phoneNum} onClick={handleFatherCall}>Contact Father</td> */}
                    <td onClick={handleFatherCall}><Button id={Child.phoneNum} variant="success" >Contact Father</Button></td>
                    <td onClick={handleMotherCall}><Button variant="success"  id={Child.phoneNum2}>Contact Mother</Button></td>
                    <td onClick={handleChildCard}><Button variant="warning"  id={Child.childID} >Child Card</Button></td>
                </tr>
         
        )
    }

    return (

        <div>
            <Container fluid style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHomePage}>Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman",textAlign:"center" }}>Children Cards</h3><br></br>
                <Table striped bordered hover responsive variant="dark" style={{ color: "white" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>ID</th>
                            <th>Gender</th>
                            <th>Attendance Status</th>
                            <th>Father's Phone Number</th>
                            <th>Mother's Phone Number</th>
                            <th>Child Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        {childrenData.map(renderChildren)}
                    </tbody>
                </Table>
                <br></br>
            </Container>
        </div>
    )
}

export default AccompanyingPersonChildCard;