var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
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

PostSchema.index({title: 'text'});
module.exports = mongoose.model('Post', PostSchema)
