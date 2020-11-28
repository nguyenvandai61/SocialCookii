const { response } = require('express');
var commentService = require('../services/comment.service');

const createComment = (req, res) =>{
    let comment = req.body;
    return commentService.createComment(comment).then((newComment, err) =>{
        if(err) return res.status(500).send(err);
        return res.status(200).json(newComment);
    });
}
const updateComment = (req, res) => {
    let newComment = req.body;
    console.log(newComment);
    return commentService.updateComment(query, newComment).then((newComment, err) =>{
        console.log(err);
        console.log(newComment);
        if(err) return res.status(500).send(err);
        return res.status(200).json(newComment);
    });
}

const deleteComment = (req, res) => {
    let query = req.body.query;
    return commentService.deleteComment(query).then(
        (data, err) => {
            if (err)  return res.status(500).send(err);
            return res.status(200).send(data)
        }
    )
}
module.exports = {
    createComment,
    updateComment,
    deleteComment,
}