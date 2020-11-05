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
  role: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('User', userSchema)
