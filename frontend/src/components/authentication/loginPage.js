import React from "react";
import "./loginPage.css";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

import image from "../../modals/assets/image6.jpg";
//<a href="https://www.freepik.com/free-vector/male-detective-wearing-brown-overcoat-hat_27180975.htm#query=investigator&position=7&from_view=search&track=robertav1_2">Image by brgfx</a> on Freepik
const LoginPage = () => {
  return (
    <div className="Login">
      <h3 className="loginPage">Login Now</h3>
      <div className="loginSection">
      <form className="loginForm" method="post">
        <div className="Email">
          <input type="email" className="email" name="email" placeholder="Enter the email address" />
        </div>
        <div className="password">
          <input type="text" name="password" className="password"  placeholder="Enter your password" />
        </div>
        <div className="router">  
          <button name="submit" className="submitLoginButton" >Submit</button>
          <div className="routerLinks"> 
          <Link to="/admin" className="link">
              Login as Admin
            </Link>
             <Link to="/signup" className="link">Create Account</Link>
   
            </div>
        </div>
      </form>
      

      <div className="loginupImage">
<img src={image} className="loginImage" alt="image"/>
</div>
      </div>
    </div>
  );
};

export default LoginPage;
