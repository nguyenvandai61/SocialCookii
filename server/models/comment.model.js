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
    type: Number,
    default: Date.now()
  },
  editedAt: {
    type: Date
  },
  deletedAt: {
    type: Date
  },
  repliedCommentId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  likeUserIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isRepliedComment: {
    type: Boolean
  }


});


module.exports = mongoose.model('Comment', CommentSchema)
