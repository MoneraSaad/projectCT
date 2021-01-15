import React  from 'react';
import "./LogIn.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function LogIn() {

    const history = useHistory();

    function handleLogInBtn(e) {
        e.preventDefault();
        const { userIDInp, passwordInp } = e.target.elements;
        const userID = userIDInp.value;
        const password = passwordInp.value;

        //fetch to login user 
        fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify({ userID, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    localStorage.setItem("userID", data.info[0].userInfo.userID);
                    localStorage.setItem("userRole", data.info[0].userInfo.userRole);
                    if (data.info[0].userInfo.userRole === 'parent')
                        history.replace('/ParentHomePage');

                    if (data.info[0].userInfo.userRole === 'Vehicle Company Manager')
                        history.replace('/VehicleCompanyManager');

                    if (data.info[0].userInfo.userRole === 'Transportation Manager')
                        history.replace('/TransportationManager');

                    if (data.info[0].userInfo.userRole === 'School Administrator')
                        history.replace('/SchoolAdministratorPage');

                    if (data.info[0].userInfo.userRole === 'Driver')
                        history.replace('/DriverPage');

                    if (data.info[0].userInfo.userRole === 'Accompanying Person')
                        history.replace('/AccompanyingPersonPage');


                }
                else {
                   
                     alert("user ID or password is incorrect Try again");
                }


            });



    }

    function handleForgotPassword() {
        history.replace("/ForgotPassword");
    }

    // function handleSignUp() {
    //     history.replace("/SignUp");
    // }
    return (
         <div className="logInContainer">/
            <Container style={{border:"solid #ffa500",borderColor:"#ffa500",textAlign:"center", background: `url('${process.env.PUBLIC_URL}/l.png')`}}>
                <Form.Text id="passwordHelpBlock" muted>
                    Sign In
                </Form.Text>
            <img alt="" src={process.env.PUBLIC_URL + "childTransportLogo.png"} style={{width:"50%",height:"50%",border:"0px solid white",borderRadius:"30px 30px 30px 30px"}}></img><br></br>

            <Form onSubmit={handleLogInBtn}>
            <br></br>
                <Form.Group> 
                <label htmlFor="userIDInp" style={{fontFamily: "Roboto", fontWeight:"bold",color:"white"}}>User ID:</label>
                <input type="text" className="form-control" placeholder="UserID" id="userIDInp" name="userIDInp" required  style={{borderBottom:" 2px solid orange"}}></input><br></br>
               </Form.Group>
             
                <Form.Group > 
                <label htmlFor="passwordInp" style={{fontFamily: "Roboto", fontWeight:"bold" ,color:"white"}}>Password:</label>
                <input type="password" className="form-control" placeholder="Password" id="passwordInp" name="passwordInp" required style={{borderBottom:" 2px solid orange"}}></input><br></br>
                </Form.Group>
                <Button variant="warning" size="lg" block id="LogInBtn" type="submit" onKeyUp={handleLogInBtn}>LogIn</Button>
            </Form>

            <Button  variant="link" id="ForgotPasswordBtn" className="forgot-password" onClick={handleForgotPassword} style={{ textDecoration: "underline"}}>Forgot Password?</Button>
            {/* <p style={{color:"white"}} className="text-center" >Don't have an account?<a id="SignUpBtn" onClick={handleSignUp} style={{color:"blue",borderBottom:"1px blue"}}>Sign up</a></p> */}
        </Container>
        </div> 
      
    )
}
export default LogIn;