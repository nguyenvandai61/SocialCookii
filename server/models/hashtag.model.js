var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const HashtagSchema = new mongoose.Schema({
  hashtagName: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Hashtag', HashtagSchema)
