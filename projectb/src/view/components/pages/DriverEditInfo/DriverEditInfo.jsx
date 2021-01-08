import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./DriverEditInfo.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

 let driverInformation= {
    userID:"",
    userName:"",
    userLastName:"",
    city:"",
    userEmail:"",
    phoneNumber:"",
    userRole:""
};   







function DriverEditInfo() {
 
  console.log("here!");
   const [DriverID, setDriverID] = useState("") ;
   const [DriverUserName, setDriverUserName] = useState([])  ;
   const [DriverLastName, setDriverLastName] = useState([]) ; 
   const [DriverEmail, setDriverEmail] = useState([])  ;
   const [DriverPhoneNumber, setDriverPhoneNumber] = useState("") ;
   const [DriverCity, setDriverCity] = useState([]); 
  
    const history = useHistory();
  
    function Back(){
      history.replace("/DriverPage");
  }
   driverInformation= {
      userID:"",
      userName:"Reem",
      userLastName:"",
      city:"",
      userEmail:"",
      phoneNumber:"",
      userRole:"Driver"
  };  
  
  console.log("Heelloooooooooooooooooooooooooooooo!");
  fetch('/api/Driver/driverEdit', {
      method: "POST",
      body: JSON.stringify({driverInformation}),
      headers: {
          "Content-Type": "application/json",
      },
  })
      .then((res) => res.json())
      .then((data) => {
        console.log("data.array[0]")
            if(data.array!=null){
              if(data.array.length>0){
          
                console.log(data.array[0])
                console.log(data.array[1])
                console.log(data.array[2])
                console.log(data.array[3])
                console.log(data.array[4])
             /*    console.log(driverInformation.userRole) */
                console.log(data.array[6]) 
           
                setDriverID(data.array[0].userID);
                setDriverUserName(data.array[1].userName);
                setDriverLastName(data.array[2].userLastName);
                setDriverEmail(data.array[3].userEmail);
                setDriverPhoneNumber(data.array[4].phoneNumber);
              /*   setDriverPhoneNumber(data.array[5].userRole); */
                setDriverCity(data.array[6].city);
             
             
              }
            }
        
    

          

      }); 
       

    function handleAddBtn(e){

    
      
        e.preventDefault();

  console.log("Edit button")
      
      

    /*    console.log(driverInformation.userRole); */
      


       
      

       
 
 



    



    /* const { DriverIdInp, DriverFirstNameInp,DriverLastNameInp,addressInp, emailInp, phoneInp} = e.target;
    console.log(e.target);
    

    const userID =DriverIdInp.value;
    const userName =DriverFirstNameInp.value;
    const userLastName=DriverLastNameInp.value;
    const city=addressInp.value;
    const userEmail=emailInp.value;
    const phoneNumber=phoneInp.value;
   
    console.log(userID);
    console.log(userName);
    console.log(userLastName);
    console.log(city);
    console.log(userEmail);
    console.log(phoneNumber);
  
    console.log("Heelloooooooooooooooooooooooooooooo!");
    fetch('/api/Driver/driverEdit', {
        method: "POST",
        body: JSON.stringify({userID,userName,userLastName,city,userEmail,phoneNumber}),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                console.log(data);
           
              }
          
      

            

        });


 */
      }



  /* function getSelector(sel){
        return document.querySelector(sel);
      }
      function makeElement(elem){
        return document.createElement(elem);
      }
      function addValue(value,elem){
        return elem.value = value;
      }
      function addText(text,parent){
        return parent.textContent = text;
      }
      function addChild(child,parent){
        return parent.appendChild(child);
      }
      function addAct(elem,act,func){
        return elem.addEventListener(act,func);
      }
      
      var yearComboBox = getSelector("#year-selection");
      var dayComboBox = getSelector("#day-selection");
      var date = new Date();
      
      for(var i = date.getFullYear();i >= 1990;i--){
        var option = makeElement('option');
        addValue(i,option);
        addText(i,option);
        addChild(option,yearComboBox)
      }
      
      for(var i = 1;i <= 31;i++){
        var option = makeElement('option');
        addValue(i,option);
        addText(i,option);
        addChild(option,dayComboBox)
      }
     
      var maleCon = getSelector(".male-container");
      var maleRadio = getSelector(".male");
      var femaleCon = getSelector(".female-container");
      var femaleRadio = getSelector(".female");
      console.log(maleCon);
      addAct(maleCon,'click',changeToMale);
      addAct(femaleCon,'click',changeToFemale);
      
      function changeToMale(e){
        femaleRadio.removeAttribute("checked");
        maleRadio.setAttribute("checked",null);
      }
      
      function changeToFemale(e){
        maleRadio.removeAttribute("checked");
        femaleRadio.setAttribute("checked",null);
      }
      
       var addBtn = addSelector(".add");
      addAct(addBtn,'click',preventDef);  
      
      function preventDef(e){
        e.preventDefault();
      }*/
       
      
return(

<div className="container">
  <div class="title-form">
    <h1>Driver INFORMATION FORM</h1>
  </div>
  <form class="Driver-form" onSubmit= {handleAddBtn}>

     <div class="field-form">
    <label for="first">ID</label>
      <input  id="DriverIdInp"type="text" name="DriverIdInp" class="first-name"  placeholder={DriverID}   readOnly="readonly"  ></input>
    </div>  
    <div class="field-form">
    <label for="first">Frist Name</label>
      <input id="DriverFirstNameInp"type="text" name="DriverFirstNameInp" class="first-name"  placeholder={DriverUserName}   readOnly="readonly"  ></input>
    </div>
    <div class="field-form">
    <label for="last">Last Name</label>
      <input id="DriverLastNameInp"type="text" name="DriverLastNameInp" class="last-name"  placeholder={DriverLastName}   readOnly="readonly" ></input>
    </div>
    <div class="field-form">
    <label for="Gender">Gender</label>
      <input id="GenderInp"type="text" name="GenderInp" class="GenderInp" placeholder="Female"   readOnly="readonly" ></input>
    </div>

   
    
    {/* <div class="field-form gender-field">
      <div class="male-container">
        <span>Male</span><input type="checkbox" className="gender"  value="male"></input>
      </div>
      <div class="female-container">
        <span>Female</span><input type="checkbox" className="gender"  value="female"></input>
      </div>      
    </div> */}
   {/*  <div class="field-form birthday-field">
      <span>Birthday</span>
        <select name="month" id="month-selection">
          <option value="">Month</option>
          <option value="01">Jan</option>
          <option value="02">Feb</option>
          <option value="03">Mar</option>
          <option value="04">Apr</option>
          <option value="05">May</option>
          <option value="06">Jun</option>
          <option value="07">Jul</option>
          <option value="08">Aug</option>
          <option value="09">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <select name="day" id="day-selection">
          <option value="">Day</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="01">13</option>
          <option value="02">14</option>
          <option value="03">15</option>
          <option value="04">16</option>
          <option value="05">17</option>
          <option value="06">18</option>
          <option value="07">19</option>
          <option value="08">20</option>
          <option value="09">21</option>
          <option value="10">22</option>
          <option value="11">23</option>
          <option value="12">24</option>
          <option value="05">25</option>
          <option value="06">26</option>
          <option value="07">27</option>
          <option value="08">28</option>
          <option value="09">29</option>
          <option value="10">30</option>
          <option value="11">31</option>

        </select>
        <select name="year" id="year-selection">
          <option value="">Year</option>
        </select>  
    </div> */}
    <div class="field-form">
     <label for="first">Address</label>
      <input  type="text" name="addressInp" id="addressInp"  placeholder={DriverCity}  ></input>
      
      </div>
     
    <div class="field-form dep">
    <label for="email">Email</label>
      <input type="email" id="emailInp" name="emailInp" placeholder={DriverEmail} ></input>
    </div>
    <div class="field-form">
    <label for="first">Phone Number</label>
     <input type="tel" id="phoneInp" name="phoneInp" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  placeholder={DriverPhoneNumber} ></input>
    </div> 
    <a  class="button2 b-red rot-135" id="r" onClick={Back}>Back</a>
  {/*   <div class="field-form button">
        <button type="submit" name="submit" class="add" >Save</button> 
    </div> */}
  </form>
</div> 








)
}

export default DriverEditInfo;



//DriverEditInfo