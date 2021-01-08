import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./AllChildrenCards.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormGroup, Form,Table } from 'react-bootstrap';

function AllChildrenCards(){
  /*   let history = useHistory();
    const [ChildrenData, setChildrenData] = useState([]);
    //let role = localStorage.getItem("userRole");
    useEffect(() => {
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
    return(
        <div>
            AllChildrenCards
        </div>
    )

}

export default AllChildrenCards;