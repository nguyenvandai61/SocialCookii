var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content:{
    type : String
  },
  createdAt: {
    type: Date
  },
  editedAt: {
    type: Date
  },
  deletedAt: {
    type: Date
  },
  repliedCommentId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  likeUserIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],


});


module.exports = mongoose.model('Comment', CommentSchema)
