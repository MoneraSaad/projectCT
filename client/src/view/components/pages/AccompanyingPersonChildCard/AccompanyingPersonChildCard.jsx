import React from 'react';
import { useState } from 'react';
import "./AccompanyingPersonChildCard.css";
import {Container,Navbar,Nav} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function AccompanyingPersonChildCard() {

    const [ChildId, setChildId] = useState([]);
    const [ChildName, setChildName] = useState([]);
    const [ChildLastName, setChildLastName] = useState([]);
    const [Father, setFather] = useState([]);
    const [Mother, setMother] = useState([]);
    const [ChildBirthday, setChildBirthday] = useState([]);
    const [ChilddisabilityType, setChilddisabilityType] = useState([]);
    const [Childlocation1, setChildlocation1] = useState([]);
    const [Childlocation2, setChildlocation2] = useState([]);
    const [ChildAccompanyingPersonName, setChildAccompanyingPersonName] = useState([]);
    const history = useHistory();




    let ChildInformation = {
        childID: "",
        childName: "",
        childLastName: "",
        FatherName: "",
        MotherName: "",
        Birthday: "",
        disabilityType: "",
        location1: "",
        location2: "",
        AccompanyingPersonName: "Accompanying1"
    };

    fetch('/api/Children/child', {
        method: "POST",
        body: JSON.stringify({ ChildInformation }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {

            if (data.array != null) {
           
                if (data.array.length > 0) {
                    for (let x = 0; x < data.array.length; x++) {
              
                        setChildId(data.array[0].childID);
                        setChildName(data.array[0].childName);
                        setChildLastName(data.array[0].childLastName)
                        setFather(data.array[0].FatherName)
                        setMother(data.array[0].MotherName)
                        setChildBirthday(data.array[0].Birthday)
                        setChilddisabilityType(data.array[0].disabilityType)
                        setChildlocation1(data.array[0].location1)
                        setChildlocation2(data.array[0].location2)
                        setChildAccompanyingPersonName(data.array[0].AccompanyingPersonName)
                    }

                }
            }



        });
        function handleSettings(){
            history.replace("/SettingsPageAccompanyingPerson");
        }
        function handleHomePage(){
          history.replace("/AccompanyingPersonPage");
        }
    return (

        <div>
            <Container style={{ border: "solid #ffa500", borderColor: "#ffa500", background: `url('${process.env.PUBLIC_URL}/l.png')` }}>
                <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={handleHomePage}>Home</Nav.Link>
                        <Nav.Link href="#Settings" ocClick={handleSettings}>Settings</Nav.Link>
                        <Nav.Link href="#LogOut">Log Out</Nav.Link>
                    </Nav>
                </Navbar>
                <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "40px", fontFamily: "Times New Roman" }}>Children Cards</h3><br></br>
                <form >
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <table >
                        <h1><span class="black">Children</span></h1>

                        <thread>
                            <tr>

                                <th style={{ color: "white" }}>ID</th>
                                <th style={{ color: "white" }}>Name</th>
                                <th style={{ color: "white" }}>Last Name</th>
                                <th style={{ color: "white" }}>Father Name</th>
                                <th style={{ color: "white" }}>Mother Name</th>
                                <th style={{ color: "white" }}>Birthday</th>
                                <th style={{ color: "white" }}> Disability Type</th>
                                <th style={{ color: "white" }}>Location 1</th>
                                <th style={{ color: "white" }}>Location 2</th>
                                <th style={{ color: "white" }}>Accompanying person</th>


                            </tr>

                            <tr>
                                <td style={{ color: "white" }}>{ChildId}</td>
                                <td style={{ color: "white" }}>{ChildName}</td>
                                <td style={{ color: "white" }}>{ChildLastName}</td>
                                <td style={{ color: "white" }}>{Father}</td>
                                <td style={{ color: "white" }}>{Mother}</td>
                                <td style={{ color: "white" }}>{ChildBirthday}</td>
                                <td style={{ color: "white" }}>{ChilddisabilityType}</td>
                                <td style={{ color: "white" }}>{Childlocation1}</td>
                                <td style={{ color: "white" }}>{Childlocation2}</td>
                                <td style={{ color: "white" }}>{ChildAccompanyingPersonName}</td>
                            </tr>

                        </thread>

                    </table>
                </form>
                <br></br>
            </Container>
        </div>



        /*  <div class="container">
             <form className="Sty">
               
             
                    <table class="container" >
                    <h1><span class="black">Children</span></h1>
        
          <meta charset="UTF-8" /> 
                <meta name="viewport"
                      content="width=device-width,  
                               initial-scale=1.0" /> 
          
                        <thead>
                            <tr>
                            
                                <th>ID</th>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Father Name</th>
                                <th>Mother Name</th>
                                <th>Birthday</th>
                                <th>Disability Type</th>
                                <th>Location 1</th>
                                <th>Location 2</th>
                            </tr>
                        </thead>
                    
                            <tr>
                                <td>{ChildId}</td>
                                <td>054*******</td>
                                <td>Yes</td>
                               
                         
                            </tr>
                    
                    </table>
              
                    </form>
            </div> */
    )
}

export default AccompanyingPersonChildCard;