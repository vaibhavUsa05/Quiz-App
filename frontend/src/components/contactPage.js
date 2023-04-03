import React from "react";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import {useState} from "react";
import "./styles/contactPage.css";
import image from "../modals/assets/image3.jpg";

const ContactPage=()=>{
  return (
    <div className="ContactPage">
        <h3 className="contactPageTitle">Mail to Our Support Team</h3>
    <form className="SendMailSection" method="post">
 <div className="userEmail">
    <input type="email" className="userEmail" placeholder="Enter your email" />
 </div>
 <div className="userEmail">
    <input type="text" className="messageSubject" placeholder="Subject" />
 </div>
<textarea placeholder="Enter your Message here...." className="messageTextarea" />
<button type="submit" className="contactButton" > Send Mail</button>
    </form>
    </div>
  );
};

export default ContactPage;
