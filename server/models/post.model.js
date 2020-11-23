var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User"
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
    type: []
  },
  recipe: {
    type: String
  },
  album: {
    type: []
  },
  videos: {
    type: []
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  }],
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
