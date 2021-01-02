import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./LogIn.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function LogIn() {

    const history = useHistory();

    function handleLogInBtn(e) {

        e.preventDefault();
        const { userNameInp, passwordInp } = e.target.elements;
        const userName = userNameInp.value;
        const password = passwordInp.value;

        //fetch to login user 
        fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify({ userName, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    console.log(data.info[0]);
                    console.log(data.info[0].active);
                    console.log(data.info[0].userInfo.userRole);
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
                    alert("Username or password is incorrect Try again")
                }


            });



    }

    function handleForgotPassword() {
        history.replace("/ForgotPassword");
    }

    function handleSignUp() {
        history.replace("/SignUp");
    }
    return (
        <div className="logInContainer">
            <h4>LogIn</h4>
            <img src={process.env.PUBLIC_URL + "childTransportLogo.png"}></img><br></br>

            <form onSubmit={handleLogInBtn}>
                <label for="userName">User Name:</label>
                <input type="text" placeholder="User Name" id="userName" name="userNameInp" ></input><br></br>
                <label for="password">Password:</label>
                <input type="text" placeholder="Password" id="password" name="passwordInp" ></input><br></br>
                <button id="LogInBtn" type="submit" onKeyUp={handleLogInBtn}>LogIn</button>
            </form>

            <button type="button" id="ForgotPasswordBtn" onClick={handleForgotPassword}>Forgot Password?</button>
            <p>Don't have an account?<button type="button" id="SignUpBtn" onClick={handleSignUp} >Sign up</button></p>

        </div>
    )
}
export default LogIn;