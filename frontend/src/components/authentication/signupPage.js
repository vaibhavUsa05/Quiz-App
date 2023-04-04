import React from "react";
// import {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../../modals/assets/image4.jpg";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "./signupPage.css";
import 'react-toastify/dist/ReactToastify.css';
const SignupPage=()=>{

//<a href="https://www.freepik.com/free-vector/private-eye-character_9462824.htm#query=sherlock%20holmes&position=20&from_view=search&track=robertav1_2">Image by macrovector</a> on Freepik

const [userSignupData, setUserSignupData] = useState({
    Firstname: "", // fixed capitalization
    Lastname: "",
    Email: "",
    Contact: "",
    Password: "",
    ConfirmPassword : ""
  });
  const navigate = useNavigate();

  const ErrorSubmitAlert = () => {
    toast.error('The Password is not matching', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
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
  const onSubmitSignupHandler = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
console.log(userSignupData);
    try {
        const password=userSignupData.Password;
        const confirmPassword=userSignupData.ConfirmPassword;
        if(password!==confirmPassword){
            ErrorSubmitAlert();
        }
        else{
      const response = await axios.post("/users/signup",
      {
        FirstName : userSignupData.Firstname ,
        LastName : userSignupData.Lastname  ,
        Email  : userSignupData.Email,
        Contact : userSignupData.Contact ,  
        Password : userSignupData.Password ,
      }, { // use POST method and send userData as request body
        withCredentials: true // send cookies with request
      });
      if (response) {
        console.log(response);
        successfulSubmitAlert();
        navigate("/login");
      }
      else{
InfoSubmitAlert();
      }


    }
    } catch (err) {
      console.log("error in form");
      navigate("/login")
    }
  }

return([
<div className="signup">
<h3 className="signupPage">Signup Now</h3>
<div className="signupSection">
<form className="signupForm" onSubmit={onSubmitSignupHandler}>
          <div className="username">
            <input
              type="text"
              name="Firstname"
              placeholder="Enter your first name"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="username">
            <input
              type="text"
              name="Lastname"
              placeholder="Enter your last name"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="Email">
            <input
              type="email"
              name="Email"
              placeholder="Enter the email address"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="Contact">
            <input
              type="number"
              name="Contact"
              placeholder="Enter your contact number"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm your password"
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="router">
            <button type="submit" name="submit" className="submit">
              Submit
            </button>
            <Link to="/login" className="link">
              Already have an account
            </Link>
          </div>
        </form>
<div className="signupImage">
<img src={image} className="image" alt="imageSignup"/>
</div>


</div>
<ToastContainer/>
</div>




])

}
export default SignupPage;