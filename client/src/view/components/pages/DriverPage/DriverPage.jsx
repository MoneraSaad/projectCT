import React from 'react';
import "./DriverPage.css";
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



function DriverPage() {
    const history = useHistory();
    let driverID = localStorage.getItem("userID");
    function handleDriverAttendanceBtn() {
        history.replace("/DriverAttendancePage");

    }

    function handleWhatsapp() {
        let VehicleCompanyManager;
        fetch('/api/Driver/drivertest', {
            method: "POST",
            body: JSON.stringify({ driverID }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    VehicleCompanyManager = data.info[0].userInfo.phoneNumber;
                    window.open("https://api.whatsapp.com/send?phone=+972" + VehicleCompanyManager + "&text=&source=&data=");



                } else {
                    alert("couldn't get vehicle company manager phone number");
                }

            });


    }

    function handleDriverLocation() {




        if (navigator.geolocation) {
            /*      navigator.geolocation.getCurrentPosition(getPosition);  */

            navigator.geolocation.watchPosition(getPosition);   //for keep watching the moves

            function getPosition(position) {

                /* window.open("https://maps.google.com?q="+position.coords.latitude+","+position.coords.longitude );  */
                //console.log(position.coords.latitude, position.coords.longitude);
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                let accuracy1 = position.coords.accuracy;
                let userID = driverID;
                console.log("here!!!");
                console.log(lat, long, userID);
                console.log(accuracy1);

                fetch('/api/Driver/driverShareLocation', {
                    method: "POST",
                    body: JSON.stringify({ lat, long, userID }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.success) {

                            console.log(data);


                        }




                    });


            }
        }
    }

    function handleSettings() {
        history.replace("/SettingsPageUsers");
    }

    function handleHome() {
        history.replace("/DriverPage");
    }

    function handleLogOut() {

        const userID = driverID;

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
            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h4 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome Driver</h4><br></br>

                {/* <Button variant="dark" size="lg" type="button" onClick={handleDriverAttendanceBtn}>Attendance</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button">Navigate</Button>
                <br></br>
                <br></br> */}
                <Button variant="dark" size="lg" type="button" onClick={handleDriverLocation}>Start Route</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact Vehicle Company Manager</Button>
                <br></br>
                <br></br>
            </Container>
        </div>
    )
}

export default DriverPage;