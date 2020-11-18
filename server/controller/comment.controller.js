const { response } = require('express');
var commentService = require('../services/comment.service');

const createComment = (req, res) =>{
    let comment = req.body;
    return commentService.createComment(res, comment);
}

module.exports = {
    createComment
}