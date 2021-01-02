import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./MyChildCard.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormGroup, Form } from 'react-bootstrap';

let childInfo = {
    childName: "",
    childLastName: "",
    childID: "",
    streetAdrees1: "",
    streetAdrees2: "",
    city: "",
    zipCode: "",
    gender: "",
};

let fatherInfo = {
    firstName: "",
    lastName: "",
    fatherID: "",
    phoneNum: "",
    homeAdrees: "",
    email: ""
}

let motherInfo = {
    firstName: "",
    lastName: "",
    motherID: "",
    phoneNum: "",
    homeAdrees: "",
    email: ""
}





function MyChildCard() {
    const [ChildData, setChildData] = useState([]);
    let history = useHistory();
    let myParent = localStorage.getItem("userName");
    console.log(myParent);
    function handleSubmitBtn(e) {
        e.preventDefault();
        console.log(e.target);
        const { input_5, input_6, input_ID, input_8, input_9, input_10, input_12, input_13_0, input_13_1, input_20, input_21, input_FatherID, input_22, input_23, input_24, input_25, input_26, input_MotherID, input_27, input_28, input_29 } = e.target;
        childInfo.childName = input_5.value;
        childInfo.childLastName = input_6.value;
        childInfo.streetAdrees1 = input_8.value;
        childInfo.childID = input_ID.value;
        childInfo.streetAdrees2 = input_9.value;
        childInfo.city = input_10.value;
        childInfo.zipCode = input_12.value;
        console.log(" childInfo.childName= " + childInfo.childName);
        console.log(" childInfo.childLastName= " + childInfo.childLastName);
        console.log(" childInfo.streetAdrees1= " + childInfo.streetAdrees1);
        console.log(" childInfo.streetAdrees2= " + childInfo.streetAdrees2);
        console.log(" childInfo.city= " + childInfo.city);
        console.log(" childInfo.zipCode= " + childInfo.zipCode);
        console.log(input_13_0);
        console.log(input_13_1);
        fatherInfo.firstName = input_20.value;
        fatherInfo.lastName = input_21.value;
        fatherInfo.fatherID = input_FatherID.value;
        fatherInfo.phoneNum = input_22.value;
        fatherInfo.homeAdrees = input_23.value;
        fatherInfo.email = input_24.value;

        motherInfo.firstName = input_25.value;
        motherInfo.lastName = input_26.value;
        motherInfo.motherID = input_MotherID.value;
        motherInfo.phoneNum = input_27.value;
        motherInfo.homeAdrees = input_28.value;
        motherInfo.email = input_29.value;
        fetch('/api/childrenCards/editChildCard', {
            method: "POST",
            body: JSON.stringify({ childInfo, fatherInfo, motherInfo }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // if (data.success) {
                //     console.log(data);
                /*   localStorage.setItem("userName", data[1].doc[0].userName);
                  console.log(localStorage.getItem("userName"));
                  localStorage.setItem("password", data[1].doc[0].password);
                  console.log(localStorage.getItem("password")); */

                //history.replace('/ParentHomePage');

                // }
                // else {
                //     alert("Try Again..")
                // }

                // const{success[0],doc


            }
            );




    }

    return (
        <div>
            <link href="https://cdn.jotfor.ms/static/formCss.css?3.3.21498" rel="stylesheet" />
            <link type="text/css" rel="stylesheet"
                href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.21498" />

            <Form className="jotform-form" onSubmit={handleSubmitBtn}>
                <div role="main" className="form-all">
                    <div className="form-section page-section">
                        <div className="form-line" data-type="control_text" id="id_1">
                            <div id="cid_1" className="form-input-wide">
                                <div id="text_1" className="form-html" data-component="text">
                                    <div id="header" className="headerclass pagemargins"
                                        style={{ backgroundColor: "#FFFFFF", padding: "15px 40px" }}>
                                        <div style={{ width: "354px", textAlign: "center" }}>
                                            <span className="wordwrap">
                                                <span className="pspan georgia"
                                                    style={{ textAlign: "center", fontSize: "44px" }}>
                                                    <span className="ispan" style={{ fontStyle: "italic", color: "#69C9CA" }}>
                                                        My Child Card
                                                                    </span>
                                                </span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className="form-line" data-type="control_text" id="id_2">
                            <div id="cid_2" className="form-input-wide">
                                <div id="text_2" className="form-html" data-component="text">
                                    <span className="wordwrap">
                                        <span className="pspan timesnewroman" style={{ fontSize: "18px" }}>
                                            <span className="ispan" style={{ color: "#4D4D4D" }}>
                                                Name of Child School
                                    </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_separator" id="id_3">
                            <div id="cid_3" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_text" id="id_4">
                            <div id="cid_4" className="form-input-wide">
                                <div id="text_4" className="form-html" data-component="text">
                                    <span className="wordwrap">
                                        <span className="pspan timesnewroman" style={{ fontSize: "14px" }}>
                                            <span className="ispan" style={{ fontWeight: "bold", color: "#4D4D4D" }}>
                                                Child's Information
                                    </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>

                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_23">
                            <label className="form-label form-label-top" id="label_5" for="input_5"> First name </label>
                            <div id="cid_5" className="form-input-wide">
                                <input type="text" id="input_5" name="q5_First name"
                                    data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder="Child's First Name" data-component="textbox" aria-labelledby="label_5" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_23">
                            <label className="form-label form-label-top" id="label_6" for="input_6"> Last name </label>
                            <div id="cid_6" className="form-input-wide">
                                <input type="text" id="input_6" name="q6_Last name"
                                    className="form-textbox" size="20" placeholder=" " />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_ID">
                            <label className="form-label form-label-top" id="label_ID" for="input_ID">ID </label>
                            <div id="cid_9" className="form-input-wide">
                                <input type="text" id="input_ID" name="qID_First name"
                                    className="form-textbox" size="20" />
                            </div>
                        </div>

                        <div className="form-line form-line-column form-col-2 form-line-column-clear" data-type="control_textbox" id="id_8">
                            <label className="form-label form-label-top" id="label_8" for="input_8"> Street address </label>
                            <div id="cid_8" className="form-input-wide">
                                <input type="text" id="input_8" name="q8_Street address"
                                    className="form-textbox" size="20" placeholder=" " />

                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_9">
                            <label className="form-label form-label-top" id="label_9" for="input_9"> Street address 2 </label>
                            <div id="cid_9" className="form-input-wide">
                                <input type="text" id="input_9" name="q9_Street address line 2"
                                    className="form-textbox" size="20" placeholder=" "
                                />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1 form-line-column-clear" data-type="control_textbox"
                            id="id_23">
                            <label className="form-label form-label-top" id="label_10" for="input_10"> City </label>
                            <div id="cid_10" className="form-input-wide">
                                <input type="text" id="input_10" name="q10_City" className="form-textbox"
                                    size="20" placeholder=" " />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_23">
                            <label className="form-label form-label-top" id="label_12" for="input_12"> Zip code </label>
                            <div id="cid_11" className="form-input-wide">
                                <input type="text" id="input_12" name="q12_Zip code"
                                    className="form-textbox" size="10" placeholder=" "
                                />
                            </div>
                        </div>
                        <div className="form-line" id="id_13">
                            <label className="form-label form-label-top" id="label_13" for="input_13"> Male or female? </label>
                            <div id="cid_13" className="form-input-wide">
                                <div className="form-single-column" role="group" data-component="radio">
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id="input_13_0" name="q13_Male or female?"
                                            value="Female" />
                                        <label id="label_input_13_0" for="input_13_0"> Female </label>
                                    </span>
                                    <span className="form-radio-item" style={{ clear: "left" }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id="input_13_1" name="q13_Male or female?"
                                            value="Male" />
                                        <label id="label_input_13_1" for="input_13_1"> Male </label>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="form-line" data-type="control_separator" id="id_14">
                            <div id="cid_14" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div>
                        <div className="form-line" data-type="control_text" id="id_19">
                            <div id="cid_19" className="form-input-wide">
                                <div id="text_19" className="form-html" data-component="text">
                                    <span className="wordwrap">
                                        <span className="pspan timesnewroman" style={{ fontSize: "14px" }}>
                                            <span className="ispan">

                                            </span>
                                        </span>
                                        <span className="pspan timesnewroman" style={{ fontSize: "14px" }}>
                                            <span className="ispan" style={{ fontWeight: "bold", color: "#4D4D4D" }}>
                                                Father's Information
                                    </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_20">
                            <label className="form-label form-label-top" id="label_20" for="input_20">First Name </label>
                            <div id="cid_20" className="form-input-wide">
                                <input type="text" id="input_20" name="q20_Parent&#x27;s/Guardian&#x27;s name"
                                    data-type="input-textbox" className="form-textbox" size="20" placeholder=" "
                                    data-component="textbox" aria-labelledby="label_20" />
                            </div>
                        </div>

                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_20">
                            <label className="form-label form-label-top" id="label_21" for="input_21">Last Name </label>
                            <div id="cid_20" className="form-input-wide">
                                <input type="text" id="input_21" name="q20_Parent&#x27;s/Guardian&#x27;s name"
                                    data-type="input-textbox" className="form-textbox" size="20" placeholder=" "
                                    data-component="textbox" aria-labelledby="label_21" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" id="id_FatherID">
                            <label className="form-label form-label-top" id="label_FatherID" for="input_FatherID">ID </label>
                            <div id="cid_FatherID" className="form-input-wide">
                                <input type="text" id="input_FatherID" name="qID_FatherID"
                                    className="form-textbox" size="20" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_21">
                            <label className="form-label form-label-top" id="label_22" for="input_22">Phone Number </label>
                            <div id="cid_21" className="form-input-wide">
                                <input type="text" id="input_22" name="q21_Phone number" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_22" />
                            </div>
                        </div>


                        <div className="form-line form-line-column form-col-3" data-type="control_textbox" id="id_22">
                            <label className="form-label form-label-top" id="label_23" for="input_23">Home Address</label>
                            <div id="cid_22" className="form-input-wide">
                                <input type="text" id="input_23" name="q22_Place of work" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_23" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-4" data-type="control_email" id="id_23">
                            <label className="form-label form-label-top" id="label_24" for="input_24">Email address </label>
                            <div id="cid_23" className="form-input-wide">
                                <input type="email" id="input_24" name="q23_Email address" className="form-textbox validate[Email]"
                                    size="30" placeholder="ex: myname@example.com" data-component="email"
                                    aria-labelledby="label_24" />
                            </div>
                        </div>
                        <div className="form-line" data-type="control_separator" id="id_24">
                            <div id="cid_24" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div>

                        <div className="form-line" data-type="control_text" id="id_19">
                            <div id="cid_19" className="form-input-wide">
                                <div id="text_19" className="form-html" data-component="text">
                                    <span className="wordwrap">
                                        <span className="pspan timesnewroman" style={{ fontSize: "14px" }}>
                                            <span className="ispan">

                                            </span>
                                        </span>
                                        <span className="pspan timesnewroman" style={{ fontSize: "14px" }}>
                                            <span className="ispan" style={{ fontWeight: "bold", color: "#4D4D4D" }}>
                                                Mother's Information
                                    </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_20">
                            <label className="form-label form-label-top" id="label_25" for="input_25">First Name </label>
                            <div id="cid_20" className="form-input-wide">
                                <input type="text" id="input_25" name="q20_Parent&#x27;s/Guardian&#x27;s name"
                                    data-type="input-textbox" className="form-textbox" size="20" placeholder=" "
                                    data-component="textbox" aria-labelledby="label_25" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_20">
                            <label className="form-label form-label-top" id="label_26" for="input_26">Last Name </label>
                            <div id="cid_20" className="form-input-wide">
                                <input type="text" id="input_26" name="q20_Parent&#x27;s/Guardian&#x27;s name"
                                    data-type="input-textbox" className="form-textbox" size="20" placeholder=" "
                                    data-component="textbox" aria-labelledby="label_26" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" id="id_MotherID">
                            <label className="form-label form-label-top" id="label_MotherID" for="input_MotherID">ID </label>
                            <div id="cid_MotherID" className="form-input-wide">
                                <input type="text" id="input_MotherID" name="qID_MotherID"
                                    className="form-textbox" size="20" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_21">
                            <label className="form-label form-label-top" id="label_27" for="input_27">Phone Number </label>
                            <div id="cid_21" className="form-input-wide">
                                <input type="text" id="input_27" name="q21_Phone number" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_27" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-3" data-type="control_textbox" id="id_22">
                            <label className="form-label form-label-top" id="label_28" for="input_28">Home Address</label>
                            <div id="cid_22" className="form-input-wide">
                                <input type="text" id="input_28" name="q22_Place of work" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_28" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-4" data-type="control_email" id="id_23">
                            <label className="form-label form-label-top" id="label_29" for="input_29">Email address </label>
                            <div id="cid_23" className="form-input-wide">
                                <input type="email" id="input_29" name="q23_Email address" className="form-textbox validate[Email]"
                                    size="30" placeholder="ex: myname@example.com" data-component="email"
                                    aria-labelledby="label_29" />
                            </div>
                        </div>
                        <div className="form-line" data-type="control_separator" id="id_24">
                            <div id="cid_24" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div>
                        {/*                 <div className="form-line" data-type="control_text" id="id_35">
                            <div id="cid_35" className="form-input-wide">
                                <div id="text_35" className="form-html" data-component="text">
                                    <p><span className="wordwrap"><span style={{ textAlign: "left", fontSize: "14px" }}
                                        className="pspan timesnewroman"><span style={{ fontWeight: "bold", color: "#4d4d4d" }}
                                            className="ispan">Other people authorized to pick up your child from
                                            school</span></span></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_36">
                            <label className="form-label form-label-top" id="label_36" for="input_36"> First name </label>
                            <div id="cid_36" className="form-input-wide">
                                <input type="text" id="input_36" name="q36_First name" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_36" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_37">
                            <label className="form-label form-label-top" id="label_37" for="input_37"> Last name </label>
                            <div id="cid_37" className="form-input-wide">
                                <input type="text" id="input_37" name="q37_Last name" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_37" />
                            </div>
                        </div>

                        <div className="form-line" data-type="control_separator" id="id_40">
                            <div id="cid_40" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div> */}
                        {/*       <div className="form-line" data-type="control_text" id="id_41">
                            <div id="cid_41" className="form-input-wide">
                                <div id="text_41" className="form-html" data-component="text">
                                    <p><span className="wordwrap"><span style={{ textAlign: "left", fontSize: "14px" }}
                                        className="pspan timesnewroman"><span style={{ fontWeight: "bold", color: "#4d4d4d" }}
                                            className="ispan">Medical information</span></span></span></p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_42">
                            <label className="form-label form-label-top" id="label_42" for="input_42"> Doctor </label>
                            <div id="cid_42" className="form-input-wide">
                                <input type="text" id="input_42" name="q42_Doctor" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_42" />
                            </div>
                        </div>
                        <div className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_43">
                            <label className="form-label form-label-top" id="label_43" for="input_43"> Doctor's phone number
                                 </label>
                            <div id="cid_43" className="form-input-wide">
                                <input type="text" id="input_43" name="q43_Doctor&#x27;s phone number" data-type="input-textbox"
                                    className="form-textbox" size="20" placeholder=" " data-component="textbox"
                                    aria-labelledby="label_43" />
                            </div>
                        </div>
 */}
                        {/*     <div className="form-line" data-type="control_separator" id="id_48">
                            <div id="cid_48" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div> */}
                        {/*   <div className="form-line" data-type="control_textarea" id="id_49">
                            <label className="form-label form-label-top" id="label_49" for="input_49"> Please list any of the
                            following: Current medications, medication allergies, food allergies, or chronic health
                                  concerns. </label>
                            <div id="cid_49" className="form-input-wide">
                                <textarea id="input_49" className="form-textarea"
                                    name="q49_Please list any of the following: Current medications, medication allergies, food allergies, or chronic health concerns."
                                    cols="40" rows="6" data-component="textarea" aria-labelledby="label_49"></textarea>
                            </div>
                        </div> */}
                        {/*     <div className="form-line" data-type="control_separator" id="id_50">
                            <div id="cid_50" className="form-input-wide">
                                <div data-component="separator" style={{ borderTop: "1px solid rgb(0,0,0)", clear: "both" }}>
                                </div>
                            </div>
                        </div> */}

                        <div style={{ textAlign: "center" }}
                            className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                            <Button id="input_51" type="submit" className="btn btn-primary btn-lg"
                            >
                                Submit
                                        </Button>
                        </div>


                    </div>
                </div>



            </Form>

        </div>
    )
}
export default MyChildCard;