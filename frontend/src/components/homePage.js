import React from "react";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import {useState} from "react";
import "./styles/homePage.css";
import image from "../modals/assets/image3.jpg";

const HomePage=()=>{
  return (
    <div className="homePage">
      <div className="navbar">
        <div className="logo"> 221 B</div>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/AboutUs">About Us</Link>
        </div>
      </div>
      <center>
        <img src={image} className="image1" alt="image1" />
      </center>
      <div className="card" style={{ zIndex: 2 }}>
        <p>"When you have eliminated the impossible, whatever remains, however improbable, must be the truth." - Sherlock Holmes</p>
      </div>
    </div>
  );
};

export default HomePage;
