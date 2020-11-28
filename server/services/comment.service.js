var Comment = require('../models/comment.model');

const createComment = (comment) => {
    const newComment = new Comment(comment);
    return newComment.save();
}

const updateComment = (query, newData) => {
    return Comment.findOneAndUpdate(query, newData);
}

const deleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err, dov) => {
        if(err) return res.status(500).send(err);
        const response = {
            message: "Comment successfully deleted"
        };
        return res.status(200).send(response);
    });
}

module.exports = {
    createComment,
    updateComment,
    deleteComment,
}