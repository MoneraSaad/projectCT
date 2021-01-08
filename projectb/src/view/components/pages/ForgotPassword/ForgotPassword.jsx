import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./ForgotPassword.css";
import { useHistory } from "react-router-dom";


function ForgotPassword() {
    let history = useHistory();
    function onSendToMail(e) {
        e.preventDefault();

        const { sendToMailInput } = e.target.elements;
        const email  = sendToMailInput.value;
        console.log(email)
     /*    
        //fetch to check if email in database
        fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const { success } = data;
                const { error } = data;
                const { info } = data;
                if (success) {

                   return(history.push(`/KeyPassword/${email}`))
                 
                }
                else {
                    alert(error)
                }
            }); */
    }

    return(
        <div className='forgetPassword-wrapper'>
             <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
             <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <div className="forgetPassword2">
            <div className="header__forgetPass">
            <h3>Reset password</h3>
            <form id="sendToMailForm" onSubmit={onSendToMail} >
                <input className="sendToMailInput" name="sendToMailInput" placeholder="Enter your email adress"></input>
                <button type="submit">SUBMIT</button>
            </form>
            </div>
            </div>
        </div>
    )
    

}
export default ForgotPassword;