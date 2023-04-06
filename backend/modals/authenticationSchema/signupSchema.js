const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/221B', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB database connection successful to Signup');
}).catch((error) => {
  console.log('MongoDB database connection error: ', error);
});

const SignupSchema = new mongoose.Schema({
    FirstName: {
    type: String,
    required: true
    },
     LastName: {
      type: String,
      required: true
     },
    Email: {
    type: String,
    required: true,
    unique: true
    },
    Contact: {
    type: Number,
    required: true
    },
    Password: {
    type: String,
    required: true
    }
    });
    
    const SignupModel= mongoose.model('Sillections', SignupSchema);
    module.exports = SignupModel;