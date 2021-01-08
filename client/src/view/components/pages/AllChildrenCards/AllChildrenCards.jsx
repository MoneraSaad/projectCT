import React from 'react';
import { useState} from 'react';
import "./AllChildrenCards.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav} from 'react-bootstrap';

function AllChildrenCards(){

    const [ChildrenData, setChildrenData] = useState([]);
    let history = useHistory();
    //let role = localStorage.getItem("userRole");
    /* useEffect(() => {
        fetch('/api/childrenCards/getAllChildrensCards', {
            method: 'GET',
            body: JSON.stringify({ userRole: localStorage.getItem("userRole") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("returned from getAllChildrensCards we are in AllChildrenCards page")
                setChildrenData(data.info);
                console.log(data.info);


            })
    }, []); */

  /*   function handleHomeBTN(){
        history.replace("/SchoolAdministratorPage");
    } */
    return(
        <div>
                   <Container style={{color:"white", border: "solid #ffa500", borderColor: "#ffa500", textAlign: "center", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
          <Navbar className="mb-3" aria-label="Toolbar with Button groups">
            <Nav className="mr-auto">
              <Nav.Link href="#home"  >Home</Nav.Link>
              <Nav.Link href="#Settings">Settings</Nav.Link>
              <Nav.Link href="#LogOut">Log Out</Nav.Link>
            </Nav>
          </Navbar>
          <h4 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Children Cards</h4><br></br>

          </Container>
        </div>
    )

}

export default AllChildrenCards;