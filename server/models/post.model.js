var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdBy: {
    type: Object
  },
  createdAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
  editedAt: {
    type: Date,
  },
  thumbnails: {
    type: Array
  },
  recipe: {
    type: String
  },
  videos: {
    type: []
  },
  comments: {
    type: Array,
  },
  likeUserIds: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  }],
  state: {
    type: String,
  },
  hashtagIds: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Hashtag"
  }],
});


module.exports = mongoose.model('Post', PostSchema)
