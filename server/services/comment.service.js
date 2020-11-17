var Comment = require('../models/comment.model');

const createComment = (res, comment) => {
    const newComment = new Comment(comment);
    newComment.save(err =>{
        if(err) return res.status(500).send(err);
        return res.status(200).json(newComment);
    })
}

module.exports = {
    createComment
}