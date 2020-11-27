var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true,
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  birthday: {
    type: String
  },
  phone: {
      type: String
  },
  createdAt: {
      type: Date,
  },
  updatedAt: {
      type: Date,
  },
  isActive: {
      type: Boolean, 
  },
  verificationCode: {
      type: String,
      maxlength: 255,
  },
  role: {
    type: String,
  }
});


module.exports = mongoose.model('User', userSchema)
