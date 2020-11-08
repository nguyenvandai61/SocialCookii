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
  thumbnail: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
  },
  album: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
  }],
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
  }],
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
