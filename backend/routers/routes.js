const express = require("express");
const router = express.Router();
const services = require("../controllers/authentication");
const services2 = require("../controllers/mail");

router.post("/signup", (req, res) => {

  services.HomePageSignupController(req,res);
});

router.post("/login", (req, res) => { 
 services.HomePageLoginController(req,res);
});

router.get("/sendMail", (req, res) => {
  console.log("Sending mail...");
  services2.SendMailToAdminController(req, res); // call the SendMailToAdminController function
});


module.exports = router;
