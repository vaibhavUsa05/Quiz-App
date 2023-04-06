
const NewSignupToUser = require("../modals/mailSchema");

const SendMailToAdminController=async(req,res,next)=>{
    console.log(" send mail function")
    let data="yes"
res.send(data) 
}
module.exports=SendMailToAdminController;