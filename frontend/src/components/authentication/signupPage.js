import React from "react";
// import {useState} from "react";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

import image from "../../modals/assets/image4.jpg";
import "./signupPage.css";
const SignupPage=()=>{

//<a href="https://www.freepik.com/free-vector/private-eye-character_9462824.htm#query=sherlock%20holmes&position=20&from_view=search&track=robertav1_2">Image by macrovector</a> on Freepik


return([
<div className="signup">
<h3 className="signupPage">Signup Now</h3>
<div className="signupSection">
<form className="signupForm" method="post">
    <div className="username">
        <input type="text" name ="userfirstname" placeholder="Enter your first name "/>
    </div>
    <div className="username">
        <input type="text" name ="userlastname" placeholder="Enter your last name "/>
    </div>
    <div className="Email">
        <input type="email" name ="email" placeholder="Enter the email address "/>
    </div>
    <div className="Contact">
        <input type="number" name ="contact" placeholder="Enter your contact number "/>
    </div>
    <div className="password">
        <input type="text" name ="password" placeholder="Enter your password "/>
    </div>
    <div className="password">
        <input type="text" name="password" placeholder="Confirm your password "/>
    </div>
    <div className="router">
        
    <button name="submit" className="submit" >Submit</button>
    <Link to="/login" className="link">Already have an account</Link>
    </div>
</form>
<div className="signupImage">
<img src={image} className="image" alt="image"/>
</div>


</div>
</div>




])

}
export default SignupPage;