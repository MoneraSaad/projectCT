import React from 'react';
import { useState, useEffect } from 'react';
import "./AllAccompanying.css";
import { Container, Navbar, Nav, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function AllAccompanying() {
    const history = useHistory();
    localStorage.removeItem("accompanyingNum");
    let SchoolAdministrator = localStorage.getItem("userID");
    const [accompanyingData, setAccompanyingData] = useState([]);
    let arrayAccompanyingAttendance=[];
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var FullDate = (date + '/' + month + '/' + year);
    useEffect(() => {
       
        fetch('/api/users/getAccompaningsList', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAccompanyingData(data.info);
                } else {
                    setAccompanyingData([]);
                    alert("you don't have any assigned children yet");
                }
            })
    }, []);
console.log(accompanyingData);

    accompanyingData.map((check, index) => {
        if(check.AccompanyingAttendance[index]===FullDate){
        arrayAccompanyingAttendance[index]="Attend";
        }else{
            arrayAccompanyingAttendance[index]="Absent";
        }
    }) 



    function handleSettings() {
        history.replace("/SettingsPageUsers");
    }
    function handleHomePage() {
        history.replace("/SchoolAdministratorPage");
    }
    function handleLogOut() {

        const userID = SchoolAdministrator;

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
    function handleAccompanyingCall(e) {
        const AccompanyingPhone=e.target.id;
        window.open("https://api.whatsapp.com/send?phone=+972" + AccompanyingPhone + "&text=&source=&data=");
    }

    const renderAccompanyings = (Accompanying, index) => {
        return (
            
                <tr key={index} >
                    <td>{index + 1}</td>
                    <td>{Accompanying.userName}</td>
                    <td>{Accompanying.userLastName}</td>
                    <td>{Accompanying.userID}</td>
                    <td>{Accompanying.gender}</td>
                    <td>{arrayAccompanyingAttendance[index]}</td> 
                    <td onClick={handleAccompanyingCall}><Button variant="success"  id={Accompanying.phoneNumber}>Contact Accompanying</Button></td>
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
                <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman",textAlign:"center" }}>Accompanying Persons List</h3><br></br>
                <Table striped bordered hover responsive variant="dark" style={{ color: "white" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>ID</th>
                            <th>Gender</th>
                            <th>Attendance</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accompanyingData.map(renderAccompanyings)}
                    </tbody>
                </Table>
                
                <br></br>
            </Container>
        </div>
    )
}

export default AllAccompanying;