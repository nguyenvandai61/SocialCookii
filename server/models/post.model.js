var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
      type: String,
      required: true,
  },
  comments: {
    type: Array,
    required: true,
  }
});


module.exports = mongoose.model('User', userSchema)
