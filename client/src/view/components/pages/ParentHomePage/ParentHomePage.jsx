import React from 'react';
import "./ParentHomePage.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar,Nav} from 'react-bootstrap';
let accompanyingPersonInfo = {
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    gender: "",
}
function ParentHomePage() {
    let myParentID = localStorage.getItem("userID");
    function handleWhatsapp() {

        fetch('/api/childrenCards/getAccompanyingPersonPhone', {
            method: 'POST',
            body: JSON.stringify({ userID: localStorage.getItem("userID") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data != null) {

                    // setAccompanyingPersonData(data.info[0]);
                    accompanyingPersonInfo.phoneNum = data.info[0].phoneNum;
                    window.replace("https://api.whatsapp.com/send?phone=+972" + accompanyingPersonInfo.phoneNum + "&text=&source=&data=");
                } else {
                    alert("couldn't get vehicle company manager phone number");
                    // setAccompanyingPersonData([]);
                }


            })
    }


    let history = useHistory();

    function handleChildCardBtn() {
        history.replace("/MyChildCardInfo");
    }

    function handleChildAttendance() {
        history.replace("/ChildAttendance");
    }

    function handleHomeBtn() {
        history.replace("/ParentHomePage");
    }

    function handleSettings(){
        history.replace("/SettingsPage");
        
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
            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHomeBtn}>Home</Nav.Link>
                        <Nav.Link href="#Settings" onClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h1 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome Parent</h1><br></br>

                <Button variant="dark" size="lg" type="button" onClick={handleChildCardBtn}>Child Card</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button" onClick={handleChildAttendance}>Submit Child Attendance Status</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button"  >Track Vehicle</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button" onClick={handleWhatsapp}>Contact Accompanying Person</Button>

                <br></br>
                <br></br>
            </Container>

        </div>

    )
}
export default ParentHomePage;