import React from "react";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import {useState} from "react";
import "./styles/aboutusPage.css";
import image from "../modals/assets/image3.jpg";

const AboutPage=()=>{
  return (
    <div className="AboutPage">
        <h3 className="aboutusTitle">About Us</h3>
    <div className="aboutData">
    Welcome to the 221B Baker Street Event at AXIS'23!
    <br/> We are excited to bring a touch of mystery and intrigue to this year's event with our Sherlock Holmes-themed activity.

Participants will have the opportunity to step into the world of Sherlock Holmes and put their detective skills to the test. Our event experience will transport participants to the famous address, where they will be given a set of clues and puzzles to solve. They will need to use their deduction skills to crack the codes and solve the mystery within a specific time frame. This activity is designed to test participants' skills in critical thinking, problem-solving, and teamwork.

    </div>

    </div>
  );
};

export default AboutPage;
