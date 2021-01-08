import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./AccompanyingPersonChildCard.css";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function AccompanyingPersonChildCard() {

    const[ChildId, setChildId] = useState([])  ;
    const[ChildName,setChildName]=useState([])  ;
    const[ChildLastName,setChildLastName]=useState([])  ;
    const[Father,setFather]=useState([])  ;
    const[Mother,setMother]=useState([])  ;
    const[ChildBirthday,setChildBirthday]=useState([])  ;
    const[ChilddisabilityType,setChilddisabilityType]=useState([])  ;
    const[Childlocation1,setChildlocation1]=useState([])  ;
    const[Childlocation2,setChildlocation2]=useState([])  ;
    const[ChildAccompanyingPersonName,setChildAccompanyingPersonName]=useState([])  ;
    const history = useHistory();
  

 
    
	let ChildInformation= {
		childID:"",
		childName:"",
		childLastName:"",
		FatherName:"",
		MotherName:"",
		Birthday:"",
		disabilityType:"",
		location1:"",
		location2:"",
		AccompanyingPersonName:"Accompanying1"
	};   

	console.log("Heelloooooooooooooooooooooooooooooo!");
    fetch('/api/Children/child', {
        method: "POST",
        body: JSON.stringify({ChildInformation}),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
      
            if(data.array!=null){
			/* 	console.log("here!") */
				if(data.array.length>0){
					for(let x=0;x<data.array.length;x++){
						console.log("child number :",x+1)
					console.log(data.array[x].childID)
					console.log(data.array[x].childName)
					console.log(data.array[x].childLastName)
					console.log(data.array[x].FatherName)
					console.log(data.array[x].MotherName)
					console.log(data.array[x].Birthday)
					console.log(data.array[x].disabilityType)
					console.log(data.array[x].location1)
					console.log(data.array[x].location2)
					console.log(data.array[x].AccompanyingPersonName)
                    setChildId(data.array[0].childID); 
                    setChildName(data.array[0].childName);
                    setChildLastName(data.array[0].childLastName)
                    setFather(data.array[0].FatherName)
                    setMother(data.array[0].MotherName)
                    setChildBirthday(data.array[0].Birthday)
                    setChilddisabilityType(data.array[0].disabilityType)
                    setChildlocation1(data.array[0].location1)
                    setChildlocation2(data.array[0].location2)
                    setChildAccompanyingPersonName(data.array[0].AccompanyingPersonName)
					}
			
				}
			}

            

        });


 
 /* function submitHandle(e){
	console.log("Pressed")

	const {IDInp, nameInp,LastInp,FatherInp, MotherInp, BirthdayInp,DisabilityInp,Location1Inp,Location2Inp,AccompanyingPersonNameInp} = e.target;
    console.log(e.target);
    

    const childID =IDInp.value;
    const childName =nameInp.value;
	const childLastName=LastInp.value;
	const FatherName=FatherInp.value;
	const MotherName=MotherInp.value;
    const Birthday=BirthdayInp.value;
    const disabilityType=DisabilityInp.value;
	const location1=Location1Inp.value;
	const location2=Location2Inp.value;
    const AccompanyingPersonName=AccompanyingPersonNameInp.value;


  
  
    console.log("Heelloooooooooooooooooooooooooooooo!");
    fetch('/api/Children/child', {
        method: "POST",
        body: JSON.stringify({childID, childName,childLastName,FatherName, MotherName, Birthday,disabilityType,location1,location2,AccompanyingPersonName}),
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







} 
 */



    function handleBackSubBtn(){
        history.replace("/AccompanyingPersonPage");
    } 
    
    return(

/*  <div className="Container">
     <form  onSubmit={submitHandle}>
		 <div>
		 <lable >ID</lable>
		 <input name="IDInp"></input><br></br>
		 <lable>Name</lable>
		 <input name="nameInp"></input><br></br>
		 <lable>Last</lable>
		 <input name="LastInp"></input><br></br>
		 <lable>Father</lable>
		 <input name="FatherInp"></input><br></br>
		 <lable>Mother</lable>
		 <input name="MotherInp"></input><br></br>
		 <lable>Birthday</lable>
		 <input name="BirthdayInp"></input><br></br>
		 <lable>Disability</lable>
		 <input name="DisabilityInp"></input><br></br>
		 <lable>Location1</lable>
		 <input name="Location1Inp"></input><br></br>
		 <lable>Location2</lable>
		 <input name="Location2Inp"></input><br></br>
		 <lable>AccompanyingPersonNameInp</lable>
		 <input name="AccompanyingPersonNameInp"></input><br></br>
		 
		 <button type="submit" name="submit"  >Save</button> 
		
		 </div>
	 </form>
	 </div> 
 */


<div>
    <form className="container">
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <table >
        <h1><span class="black">Children</span></h1>
   
  <thread>
  <tr>
                    
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Father Name</th>
                    <th>Mother Name</th>
                    <th>Birthday</th>
                    <th>Disability Type</th>
                    <th>Location 1</th>
                    <th>Location 2</th>
                    <th>Accompanying person</th>
                    

                </tr>

                <tr>
                        <td>{ChildId}</td>
                        <td>{ChildName}</td>
                        <td>{ChildLastName}</td>
                        <td>{Father}</td>
                        <td>{Mother}</td>
                        <td>{ChildBirthday}</td>
                        <td>{ChilddisabilityType}</td>
                        <td>{Childlocation1}</td>
                        <td>{Childlocation2}</td>
                        <td>{ChildAccompanyingPersonName}</td>
                       
                 
                    </tr>
                   
  </thread>

        </table>
    </form>
</div>



/*  <div class="container">
     <form className="Sty">
       
     
            <table class="container" >
            <h1><span class="black">Children</span></h1>

  <meta charset="UTF-8" /> 
        <meta name="viewport"
              content="width=device-width,  
                       initial-scale=1.0" /> 
  
                <thead>
                    <tr>
                    
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Father Name</th>
						<th>Mother Name</th>
						<th>Birthday</th>
						<th>Disability Type</th>
						<th>Location 1</th>
						<th>Location 2</th>
                    </tr>
                </thead>
            
                    <tr>
                        <td>{ChildId}</td>
                        <td>054*******</td>
                        <td>Yes</td>
                       
                 
                    </tr>
            
            </table>
      
            </form>
    </div> */    
	)
	}

export default AccompanyingPersonChildCard;