import React, { useState } from "react";
import "./loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import image from "../../modals/assets/image6.jpg";
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [userData, setUserData] = useState({
    Email: "", // fixed capitalization
    Password: ""
  });
  const navigate = useNavigate();

  const successfulSubmitAlert = () => {
    toast.success('Congrats your form is submitted succesfully', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const InfoSubmitAlert = () => {
    toast.success('Server Error 500', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const onSubmitLoginHandler = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    try {
      const response = await axios.post("/users/login", {
        Email : userData.Email,
        Password : userData.Password
      }, { // use POST method and send userData as request body
        withCredentials: true // send cookies with request
      });
      if (response) {
        successfulSubmitAlert();
        navigate("/contestPage");
      }
      else{
        InfoSubmitAlert();
      }
    } catch (err) {
      console.log("error in form");
    }
  }

  return (
    <div className="Login">
      <h3 className="loginPage">Login Now</h3>
      <div className="loginSection">
        <form className="loginForm" onSubmit={onSubmitLoginHandler}>
          <div className="Email">
            <input type="email" className="email" name="Email" placeholder="Enter the email address" onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })} required />
          </div>
          <div className="password">
            <input type="password" name="Password" className="password" placeholder="Enter your password" onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })} required />
          </div>
          <div className="router">
            <button type="submit" name="submit" className="submitLoginButton">Submit</button>
            <div className="routerLinks">
              <Link to="/admin" className="link">Login as Admin</Link>
              <Link to="/signup" className="link">Create Account</Link>
            </div>
          </div>
        </form>
        <div className="loginupImage">
          <img src={image} className="loginImage" alt="imageLogin" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
