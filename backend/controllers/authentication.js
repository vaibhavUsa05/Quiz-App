const ExistingUser = require("../modals/authenticationSchema/loginSchema");
 const NewSignupToUser = require("../modals/authenticationSchema/signupSchema");
const jwt = require("jsonwebtoken");
const crypto=require("crypto")
const bcrypt = require("bcrypt");
const path = require('path');


const HomePageLoginController = async (req, res, next) => {
    console.log("this the login")
  const responseObject={
    isExistingUser:true,
    passwordMatching:true
  }
  try {
    const { Email, Password } = req.body;
    console.log("login data in the backend is coming " + Email + "  " + Password);
    const findExistingUser = await NewSignupToUser.findOne({ Email: Email});
     console.log("this is retreive documnet" + findExistingUser);
    if (findExistingUser=== null) {
      responseObject.isExistingUser=false;
      res.send(responseObject);
    } 
    else if(findExistingUser) {
      try{
        console.log("Password:", Password);
        console.log("findExistingUser.Password:", findExistingUser.Password);

        const matchingPassword = await bcrypt.compare(Password, findExistingUser.Password);
        console.log("matchingPassword:", matchingPassword);
          
        if (matchingPassword) {
            console.log('Password matches');
            // Add logic to generate token and save it to database
         
        } else {
            console.log('Password does not match');
            responseObject.passwordMatching = false;
        }
        
      if(!matchingPassword){
        console.log(matchingPassword);
        console.log("password is not matching");
        console.log("loggin use password : " + Password);
        console.log("db password : "+ findExistingUser.Password);
        responseObject.passwordMatching=false;
            }
      if(matchingPassword){
      const key = findExistingUser._id;
      console.log(key);
    responseObject.isExistingUser=true;
    // jst access
    const payload = {
      Email: findExistingUser.Email,
      _id: findExistingUser._id,
      FirstName:findExistingUser.FirstName
    };
    
    //setting up the access_token
    const access_token=jwt.sign(payload,"dfcd8c8c6b1feff918e8a4166d7e7a98eb5fcc33f40eddd99b103d2f2f8f6082");
    console.log(access_token)
    // settin up the jwtoken
    res.cookie("jwtoken",access_token,{
  expires: new Date(Date.now()+25892000000),
  httpOnly:false
})
}
      res.status(201).send(responseObject);
    //   console.log("congo bro");
    //  console.log("response after user has log in ");
      // res.redirect("/user/authentication/login/chatPage")
    }catch(err){
    console.log("this is hashing error "+ err);
    }
  }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const ExistingUserController=async(req,res,next)=>{
    console.log("this the existing user")

// try{
//  const {Email}= req.params.Email;
// const retrieveUserWithEmail= await NewSignupToUser.find({Email : Email});
// console.log(retrieveUserWithEmail);
// if(retrieveUserWithEmail){
//   console.log("retrieving user data ...... sending to frontend for avatars");
//   res.send(retrieveUserWithEmail);
// }

// }catch(err){
// res.send(err);
// }

}
// Fine 
const HomePageSignupController = async (req, res, next) => {
    console.log("this the signup")
    const responseObject = { 
        isExistingUser: false,
        isServerError: false 
    }
    try {
        const { FirstName, LastName, Email, Contact, Password } = await req.body;
        console.log("data in the backend is getting fetched: " + FirstName + LastName + Email + Contact + Password)
        const existingUser = await NewSignupToUser.findOne({ Email });

        if (existingUser) {
            console.log("user already exists");
            responseObject.isExistingUser = true;
            res.status(409).send(responseObject); // Return HTTP 409 Conflict status
        } else {
            const secreteKeyGenerator = Math.random().toString(36);
            let saltRounds = 10;
            const hashedPassword = await bcrypt.hash(Password, saltRounds);
            const newuser = new NewSignupToUser({
                FirstName,
                LastName,
                Email,
                Contact,
                Password: hashedPassword
            });
            await newuser.save();
            console.log("in the backend new data is after hashing password " + newuser);
            res.status(201).send(responseObject); // Return HTTP 201 Created status
            return;
        }
    } catch (err) {
        console.log(err);
        responseObject.isServerError = true;
        res.status(500).send(responseObject); // Return HTTP 500 Internal Server Error status
    }
};
exports.ExistingUserController=ExistingUserController;
exports.HomePageLoginController = HomePageLoginController;
exports.HomePageSignupController = HomePageSignupController;