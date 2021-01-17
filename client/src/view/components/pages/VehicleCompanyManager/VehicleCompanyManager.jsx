import React from 'react';
import "./VehicleCompanyManager.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar,Nav} from 'react-bootstrap';

function VehicleCompanyManager() {
    let history = useHistory();
    let vehicleCompanyManagerID = localStorage.getItem("userID");

    function handleWhatsapp() {
        let transportationManaget;
        fetch('/api/users/transportationManagetPhone', {
            method: "POST",
            body: JSON.stringify({ vehicleCompanyManagerID }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    transportationManaget = data.info[0].userInfo.phoneNumber;
                    window.open("https://api.whatsapp.com/send?phone=+972" + transportationManaget + "&text=&source=&data=");
                } else {
                    alert("couldn't get Transportation Manager phone number");
                }

            });


    }

    function handleSettings() {
        history.replace("/SettingsPageUsers");
    }


    function handleHome() {
        history.replace("/VehicleCompanyManager");
    }

    function handleLogOut() {
        const userID = vehicleCompanyManagerID;
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
        <div >
            <Container fluid style={{ border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h1 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome Vehicle Company Manager</h1><br></br>

                {/* <Button variant="dark" size="lg" type="button" >View\Manage Drivers</Button>
                <br></br>
                <br></br> */}
                {/* <Button variant="dark" size="lg" type="button" >Track Vehicle</Button>
                <br></br>
                <br></br> */}
                <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact Transportation Manager</Button><br></br>
                <br></br>
                <br></br>
            </Container>

        </div>

    )
}
export default VehicleCompanyManager;