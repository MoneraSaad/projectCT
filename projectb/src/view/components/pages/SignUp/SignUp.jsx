import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./SignUp.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignUp() {
    const history = useHistory();



    return(
        <div class="container h-100">

        <div class="row h-100 justify-content-center align-items-center">
    
            <form class="col-md-7 col-lg-5 col-xl-4 bg-light">
    
                <div class="form-group">
    
                    <h1 class="h3 mt-3 text-center">Create an account.</h1>
    
                </div>
    
                <div class="form-group">
                    <input class="form-control" placeholder="First Name" type="text" required=""></input>
                </div>
    
                <div class="form-group">
                    <input class="form-control" placeholder="Last Name" type="text" required=""></input>
                </div>
    
                <div class="form-group">
                    <input class="form-control" placeholder="Email" type="text" required=""></input>
                </div>
    
                <div class="form-group">
                    <input class="form-control" placeholder="Password" type="password" required=""></input>
                </div>
    
                <div class="form-group">
                    <input class="form-control" placeholder="Confirm Password" type="password" required=""></input>
                </div>
    
                <div class="form-group">
                    <button class="btn btn-block btn-primary">Register</button>
                </div>
    
                <p class="text-center"><a href="">Already have an account?</a></p>
    
            </form>
    
        </div>
    
        </div>
      
    )

}

export default SignUp;