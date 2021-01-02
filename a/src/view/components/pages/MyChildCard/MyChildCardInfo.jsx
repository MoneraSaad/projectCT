import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./MyChildCard.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormGroup, Form, Table ,Row,Col} from 'react-bootstrap';


function MyChildCardInfo() {
   
    let history = useHistory();
    let myParent = localStorage.getItem("userID");
    console.log(myParent);
    const [childData, setChildData] = useState([]);
    useEffect(() => {
        
        fetch('/api/childrenCards/getMyChildInfo', {
            method: 'POST',
            body: JSON.stringify({ userID: localStorage.getItem("userID") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data!=null){
                console.log("returned from getMyChildInfo we are in MyChildCardInfo page")
                setChildData(data.info);
                console.log("the ")
                console.log(data.info);
                }else{
                    setChildData([]);
                }


            })
     }, []);
/* 
     //fetch to receive Data (UiObj) from server after every filter Change
    const render = (serverFilters) => {
        fetch('/api/analytics/modificationByField', {
            method: 'POST',
            body: JSON.stringify({ serverFilters }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data != null) {
                    setUiObjs(data);

                }
                else {
                    setUiObjs([]);
                }
            })
    } */



     console.log(childData);
 
    return (

        <div>
            {childData.length > 0 && childData.map((columns, index) => {
                return(
            <Container>
                <Form>
                    <Form.Group controlId="formChildInfo">
                        <Form.Label>
                            <Row>
                                <p>{childData[0].ChildInfo}</p>
                                <Col></Col>
                            </Row>
                        </Form.Label>
                    </Form.Group>
                </Form>
            </Container>
                )
            })}
        </div>

    )
}
export default MyChildCardInfo;