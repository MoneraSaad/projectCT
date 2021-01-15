import React from 'react';
import "./ForgotPassword.css";
import { useHistory } from "react-router-dom";
import { Form,Button,Container,Navbar,Nav} from 'react-bootstrap';

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

    function handleBackBtn() {
        history.replace("/LogIn");
    }

    return(
        <div >
        <Container style={{border:"solid #ffa500",borderColor:"#ffa500",textAlign:"center", background: `url('${process.env.PUBLIC_URL}/l.png')`}}>
        <Navbar className="mb-3" aria-label="Toolbar with Button groups">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" onClick={handleBackBtn}>Home</Nav.Link>
                </Nav>
            </Navbar>
                <h3 style={{ fontWeight: "bold", color: "#ffa500", fontSize: "50px", fontFamily:"Times New Roman"}}>Forgot Password</h3>
        <Form  id="sendToMailForm"onSubmit={onSendToMail}>
        <br></br>
            <Form.Group> 
            <label htmlFor="sendToMailInput" style={{fontFamily: "Roboto", fontWeight:"bold",color:"white"}}>Email: </label><br></br>
             <input className="form-control" id="sendToMailInput" name="sendToMailInput" placeholder="Email" required  style={{borderBottom:" 2px solid orange"}}></input><br></br>
           </Form.Group>
           <Button variant="warning" size="lg" block id="LogInBtn" type="submit">SUBMIT</Button>
        </Form>
        </Container>
        </div>
    )
    

}
export default ForgotPassword;