import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./SchoolAdministratorPage.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

function SchoolAdministratorPage() {
    let history = useHistory();

    function handleChildCardBtn() {
        history.replace("/MyChildCard");
    }

    function handleChildAttendance() {
        history.replace("/ChildAttendance");
    }

    return (
   <div className="container">
        <Container >
             
          <p id="VehicleCompanyManagerParagraph"><Button type="button" className="btn btn-info" onClick={handleChildCardBtn}>Child Card</Button></p>
          <p className="VehicleCompanyManagerParagraph"><Button type="button" className="btn btn-info" onClick={handleChildAttendance}>Child Attendance/Absence</Button></p>
          <p className="VehicleCompanyManagerParagraph"><Button type="button" className="btn btn-info">Track Vehicle</Button></p>
          <p className="VehicleCompanyManagerParagraph"><Button type="button" className="btn btn-info">Contact Accompanying Person</Button></p>
          </Container>
          
          </div> 

    )
}
export default SchoolAdministratorPage;