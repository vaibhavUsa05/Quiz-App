const express = require("express");
const router = express.Router();
const services = require("../controllers/authentication");
const services2 = require("../controllers/mail");

router.post("/signup", (req, res) => {
  console.log("the signup data is");
  console.log(req.body);
});

router.post("/login", (req, res) => { 
    console.log("the login data is");
console.log(req.body);
});

// router.get("/sendMail", services2.SendMailToAdminController);

module.exports = router;
