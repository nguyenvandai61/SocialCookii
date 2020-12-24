const { response } = require('express');
var commentService = require('../services/comment.service');

const createComment = async (req, res) =>{
    let comment = req.body;
    console.log(comment);
    comment.userId = {};
    comment.userId._id = req.user.id;
    console.log("Comment by: "+comment.userId._id);
    return await commentService.createComment(comment, res).then((newComment, err) =>{
        if(err) return res.status(500).send(err);
        return res.status(200).json(newComment);
    });
}

const updateComment = (req, res) => {
    let newComment = req.body;
    const query = {_id: req.params.id};
    console.log("params" + query);
    return commentService.updateComment(query, newComment).then((newComment, err) =>{
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

const getAllComment = (req, res) => {
    return Comment.getAllComment().then((comments, err) => {
        return res.status(200).json(comments);
    });
}

const getCommnent = (req, res) => {
    let query = {_id: req.params.id};
    console.log(req.params.id);
    return commentService.getCommnent(query).then((data,err) => {
        console.log(data);
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find Comment" });
        return res.status(200).json(data)
    })
}
module.exports = {
    createComment,
    updateComment,
    deleteComment,
    getAllComment,
    getCommnent
}