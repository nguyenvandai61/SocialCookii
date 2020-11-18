var Comment = require('../models/comment.model');

const createComment = (comment) => {
    const newComment = new Comment(comment);
    return newComment.save();
}

const updateComment = (query, newData) => {
    return Comment.findOneAndUpdate(query, newData);
}

module.exports = {
    createComment,
    updateComment
}