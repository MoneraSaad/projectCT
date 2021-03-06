import React from 'react';
import "./ChildAttendance.css";
import { Button, Container, Navbar, Nav, } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


function ChildAttendance() {
    const history = useHistory();
    let myParentID = localStorage.getItem("userID");

    // var today = new Date(); 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var FullDate = (date + '/' + month + '/' + year);
    var Dates = [];
    var i = 0;


    for (i = 0; i < 6; i++) {

        date = date + 1;


        if ((date > 31) && (month === 12)) {

            month = 1;
            date = 1;
            year = year + 1;

        }

        else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            if (date > 31) {

                date = 1;
                month = month + 1;

            }
        }
        else {
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                if (date > 30) {
                    date = 1;

                    if (month === 12) {
                        month = 1;
                    }
                    month++;
                }
            }
            if (month === 2) {
                if (year % 4 === 0) {
                    if (date > 29) {
                        date = 1;
                        month = 3;
                    }


                }
                else if (date > 28) {
                    date = 1;
                    month = 3;
                }
            }
        }
        Dates[i] = (date + '/' + month + '/' + year);
        var Tomorrow = Dates[0];
        var Tomorrow1 = Dates[1];
        var Tomorrow2 = Dates[2];
        var Tomorrow3 = Dates[3];
        var Tomorrow4 = Dates[4];
        var Tomorrow5 = Dates[5];

    }


    function getvalue(e) {
        e.preventDefault();

        var checks = document.getElementsByClassName('checks');
        var i = 0;
        let myCheckBox = [];
        for (i = 0; i < 7; i++) {
            if (checks[i].checked === true) {
                myCheckBox[i] = checks[i].value;
            }
            else{
                myCheckBox[i] = "0"; 
            }

        }

        fetch('/api/users/mychildAttendance', {
            method: "POST",
            body: JSON.stringify({ myCheckBox, myParentID }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {
                    alert("Your child attendance status successfully updeted");
                }

                else {
                    alert("!!can't update your child status!!");
                }

            });
    }

    function handleSettings() {
        history.replace("/SettingsPage");
    }
    function handleHomePage() {
        history.replace("/ParentHomePage");
    }

    function handleLogOut() {

        const userID = myParentID;

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
            <Container fluid style={{ color: "white", border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHomePage} >Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h4 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Child Attendance</h4><br></br>

                <form action="#">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <h5>Please, Mark The days your child will attend school for this week</h5>
                    <p>
                        <input type="checkbox" className="checks" id="periph1" value={FullDate} ></input>
                        <label className="check1" htmlFor="periph1">{FullDate}</label><br></br>
                    </p>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph2" value={Tomorrow}></input>
                    <label className="check1" htmlFor="periph2">{Tomorrow}</label><br></br>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph3" value={Tomorrow1}></input>
                    <label className="check1" htmlFor="periph3">{Tomorrow1}</label><br></br>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph4" value={Tomorrow2}></input>
                    <label className="check1" htmlFor="periph4">{Tomorrow2}</label><br></br>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph5" value={Tomorrow3}></input>
                    <label className="check1" htmlFor="periph5">{Tomorrow3}</label><br></br>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph6" value={Tomorrow4}></input>
                    <label className="check1" htmlFor="periph6">{Tomorrow4}</label><br></br>
                    <br></br>
                    <input type="checkbox" className="checks" id="periph7" value={Tomorrow5}></input>
                    <label className="check1" htmlFor="periph7">{Tomorrow5}</label><br></br>
                    <br></br>
                    <Button variant="warning" size="lg" block onClick={getvalue}>Send</Button>

                </form>
                <br></br>
                <br></br>
            </Container>
        </div>
    )
}
export default ChildAttendance;