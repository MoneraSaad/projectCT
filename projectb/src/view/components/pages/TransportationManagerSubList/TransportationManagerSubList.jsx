import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./TransportationManagerSubList.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function TransportationManagerSubList() {

    const history = useHistory();

    function handleBackSubBtn(){
        history.replace("/TransportationManager");
    }
    
    return(

<div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Subtitutes <b>List</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus" onClick={handleBackSubBtn}></i>Back</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reem</td>
                        <td>054*******</td>
                        <td>Yes</td>
                        
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>    






/*         <div class="TransportationManagerSubListContainer">
            <h1>My Subtitutes List</h1>
            <table class="table table-sm table-bordered table-hover">
                <thread>
                    <tr>
                        <th>#N</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Available</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Reem</td>
                        <td>0548145257</td>
                        <td>Yes</td>

                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Monera</td>
                        <td>0000000000</td>
                        <td>No</td>

                        
                    </tr>
                </thread>
            </table>
            
        </div> */
      
    )
}
export default TransportationManagerSubList;