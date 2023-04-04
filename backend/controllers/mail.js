
const NewSignupToUser = require("../modals/mailSchema");

const SendMailToAdminController=async(req,res,next)=>{
    console.log(" send mail function")
res.status(200).json({"message":" all good in mail"})
return 
}
module.exports=SendMailToAdminController;