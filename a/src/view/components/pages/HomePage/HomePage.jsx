import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./HomePage.css";
import logo from "./img/kids-diverse_orig.png";


function HomePage(){

    return (
        <div className="bg-row">
            <img src={logo}></img>  
             <div class="paraContent text-center">
             <h1>Children Transportation</h1>
        <h2><label>Real time location, less time waiting, safe child transport,and much more&#8230;</label></h2>
        </div>
        </div>

    )

}

export default HomePage;
