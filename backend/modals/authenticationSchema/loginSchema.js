const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/221B', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB database connection successful to login');
}).catch((error) => {
  console.log('MongoDB database connection error: ', error);
});
const LoginSchema = new mongoose.Schema({
Email: {
type: String,
required: true,
unique: true
},
Password: {
type: String,
required: true
}
});

const LoginModel= mongoose.model('Login', LoginSchema);
module.exports=LoginModel;