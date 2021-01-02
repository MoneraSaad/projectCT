import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./AccompanyingPersonAbsentPage.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";


function AccompanyingPersonAbsentPage() {
    const history = useHistory();
 
    var today = new Date(); 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var FullTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var FullDate=(date + '/' + month + '/' + year);
    var Dates = [];
    var i=0;

   
          for(i=0;i<6;i++){

           date=date+1;


          if((date>31) && (month == 12)){
      
            month=1;
            date=1;
            year=year+1;
           // console.log("here!!!");
              }
          
         else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
          if(date>31){
           // console.log("here258!!!");
            date=1;
            month=month+1;
         
        }
     }
     else{
        if(month==4 || month==6 || month==9 || month==11) {
            if(date>30){
                date=1;
               
                if(month==12){
                    month=1;
                  }
                  month++;
            }
        }
        if(month==2){
            if(year%4==0){
                if(date>29){
                    date=1;
                    month=3;
                }
             
             
            }
            else if(date>28){
                date=1;
                month=3;
            }
        }
     }
     Dates[i]=(date+'/' + month + '/' + year);
     var Tomorrow =Dates[0];
     var Tomorrow1 =Dates[1];
     var Tomorrow2 =Dates[2];
     var Tomorrow3 =Dates[3];
     var Tomorrow4 =Dates[4];
     var Tomorrow5 =Dates[5];

          }
    
   
  function getvalue(e){
      e.preventDefault();
      console.log(e.target.elements);


 
     /* alert(FullDate);
     alert(FullTime);   */
     //alert(Tomorrow);
   

      var checks = document.getElementsByClassName('checks');
      var str = '';
      var i=0;

      for(i=0;i<7;i++){
          if(checks[i].checked===true){
              str+=checks[i].value + " ";
              
          }
      
      }
      const checkBox1=str;
     // const FullDate1=FullDate;
     // const FullTime1=FullTime;
      console.log(checkBox1);
     // console.log(FullDate1);
     // console.log(FullTime1);

      fetch('/api/users/AccompanyingPersonAbsent', {
        method: "POST",
        body: JSON.stringify({checkBox1}),
        headers: {
            "Content-Type": "application/json",
        },
     })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                console.log(data);
              /*   localStorage.setItem("userName", data[1].doc[0].userName);
                console.log(localStorage.getItem("userName"));
                localStorage.setItem("password", data[1].doc[0].password);
                console.log(localStorage.getItem("password")); */

             //history.replace('/ParentHomePage');
      
              }
              
              else{
                alert("Try Again..");
              }
      
              // const{success[0],doc
            

        });

      //alert (str);
      // alert ("GOt");
    }
    
     return(


        
   
        <div className="container">
           
           <form className="container" action="#">
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <h1>Please, Mark The days you will work at this week</h1>
     <p>
        <input type="checkbox"className="checks" id="periph1"  value={FullDate} ></input>
        <label class="check1"for="periph1">{FullDate}</label><br></br>
        </p>
        <br></br>
        <input type="checkbox" className="checks" id="periph2"  value={Tomorrow}></input>
        <label class="check1" for="periph2">{Tomorrow}</label><br></br>
        <br></br>
        <input type="checkbox" className="checks" id="periph3" value={Tomorrow1}></input>
        <label class="check1" for="periph3">{Tomorrow1}</label><br></br>
        <br></br>
        <input type="checkbox" className="checks" id="periph4" value={Tomorrow2}></input>
        <label class="check1" for="periph4">{Tomorrow2}</label><br></br>
        <br></br>
        <input type="checkbox" className="checks" id="periph5" value={Tomorrow3}></input>
        <label class="check1" for="periph5">{Tomorrow3}</label><br></br>
        <br></br>
        <input type="checkbox" className="checks" id="periph6"  value={Tomorrow4}></input>
        <label class="check1" for="periph6">{Tomorrow4}</label><br></br>
        <br></br>
        <input type="checkbox" className="checks" id="periph7" value={Tomorrow5}></input>
        <label class="check1" for="periph7">{Tomorrow5}</label><br></br>
        <br></br>
        <a href="#" onClick= {getvalue}>Send</a><br></br>
   

       
        
    
      
        </form>
    
     </div> 
    )
}
export default AccompanyingPersonAbsentPage;