const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/221B', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB database connection successful to mail');
}).catch((error) => {
  console.log('MongoDB database connection error: ', error);
});

const Model = new mongoose.Schema({
    Email: {
    type: String,
    required: true,
    unique: true
    },
    Subject: {
    type: String,
    required: true
    },
    Message: {
    type: String,
    required: true
    }
    });
    
    const MailModel= mongoose.model('Mail', Model);
    module.exports = MailModel;