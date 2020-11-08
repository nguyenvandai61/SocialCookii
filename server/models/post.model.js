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
    type: String,
  },
  createdAt: {
    type: String,
  },
  deletedAt: {
    type: String,
  },
  editedAt: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  album: {
    type: String,
  },
  videos: {
    type: String,
  },
  comments: {
    type: String,
  },
  likeUserIds: {
    type: String,
  },
  state: {
    type: String,
  },
  hashtagIds: {
    type: String,
  },
});


module.exports = mongoose.model('Post', PostSchema)
