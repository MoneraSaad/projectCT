import React from 'react';
import "./SchoolAdministratorPage.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav,Dropdown } from 'react-bootstrap';

function SchoolAdministratorPage() {
    let history = useHistory();
    let SchoolAdministratorID = localStorage.getItem("userID");

    function handleChildrenCardsBtn() {
        history.replace("/AllChildrenCards");
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


    function handleChildCard() {
        history.replace("/CreateChildCard");
    }

    
    function handleSelect(e){
    // setValue(e.target.innerHTML);
    localStorage.setItem("createRole",e.target.innerHTML);
    history.replace("/SignUp");
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
                <h1 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Welcome School Administrator</h1><br></br>

                <Button variant="dark" size="lg" type="button" onClick={handleChildrenCardsBtn}>Children List</Button>
                <br></br>
                <br></br>
                <Button variant="dark" size="lg" type="button" >Accompanying Persons List</Button>
                <br></br>
                <br></br>
                {/* <Button variant="dark" size="lg" type="button"  >Substitutes List</Button>
                <br></br>
                <br></br> */}
                <Button variant="dark" size="lg" type="button" onClick={handleChildCard} >Create Child Card</Button>
                <br></br>
                <br></br>
                {/* <Button variant="dark" size="lg" type="button" onClick={handleCreateAccount}>Create a New Account</Button> */}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        Create New Account
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Accompanying Person" onClick={handleSelect}>Accompanying Person</Dropdown.Item>
                        <Dropdown.Item eventKey="Driver" onClick={handleSelect}>Driver</Dropdown.Item>
                        <Dropdown.Item eventKey="parent" onClick={handleSelect}>parent</Dropdown.Item>
                        <Dropdown.Item eventKey="Transportation Manager" onClick={handleSelect}>Transportation Manager</Dropdown.Item>
                        <Dropdown.Item eventKey="Vehicle Company Manager" onClick={handleSelect}>Vehicle Company Manager </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
            </Container>

        </div>


    )
}
export default SchoolAdministratorPage;