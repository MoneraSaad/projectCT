import React from 'react';
import { useState, useEffect } from 'react';
import "./AllAccompanying.css";
import { Container, Navbar, Nav, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function AllAccompanying() {
    const history = useHistory();
    localStorage.removeItem("childCardNum");
    let SchoolAdministrator = localStorage.getItem("userID");
    const [accompanyingsData, setAccompanyingsData] = useState([]);
    useEffect(() => {
       
        fetch('/api/users/getAllAccompanying', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAccompanyingsData(data.info);
                } else {
                    setAccompanyingsData([]);
                    alert("couldn't get Accompanyings Data");
                }
            })
    }, []);




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

    function handleFatherCall(e) {
        const fatherPhone=e.target.id;
       window.open("https://api.whatsapp.com/send?phone=+972" + fatherPhone + "&text=&source=&data=");
    }

    function handleMotherCall(e) {
        const motherPhone=e.target.id;
        window.open("https://api.whatsapp.com/send?phone=+972" + motherPhone + "&text=&source=&data=");
    }
    
    function handleAccompanyingCall(e) {
        const AccompanyingPhone=e.target.id;
        window.open("https://api.whatsapp.com/send?phone=+972" + AccompanyingPhone + "&text=&source=&data=");
    }
    function handleChildCard(e){
        let theChildID=e.target.id;
        localStorage.removeItem("childCardNum");
        localStorage.setItem("childCardNum",theChildID);
        history.replace("/ChildCard");
    }

    

    const renderAccompanyings = (accompanying, index) => {
        return (
            
                <tr key={index} >
                    <td>{index + 1}</td>
                    <td>{accompanying.accompanyingPersonName}</td>
                    <td>{accompanying.accompanyingPersonLastName}</td>
                    <td>{accompanying.userID}</td>
                    <td>{accompanying.gender}</td>
                    <td onClick={handleAccompanyingCall}><Button variant="success"  id={Child.accompanyingPersonPhoneNum}>Contact Accompanying</Button></td>
                    <td onClick={handleChildCard}><Button variant="warning"  id={Child.childID} >Child Card</Button></td>
                </tr>
         
        )
    }

    return (

        <div>
            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
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
                            <th>Father's Phone Number</th>
                            <th>Mother's Phone Number</th>
                            <th>Accompanying Person</th>
                            {/* <th>Mother's Phone Number</th>
                            <th>Mother's Phone Number</th> */}
                            <th>Accompanying Person PhoneNum</th>
                            <th>Child Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accompanyingsData.map(renderAccompanyings)}
                    </tbody>
                </Table>
                
                <br></br>
            </Container>
        </div>
    )
}

export default AllAccompanying;