var express = require('express');

const commentController = require('../../controller/comment.controller');
var router = express.Router();

router.post('/', (req, res) => {
    if (Array.isArray(req.body))
        return commentController.createComment(req, res);
    return commentController.createComment(req, res);
})

module.exports = router