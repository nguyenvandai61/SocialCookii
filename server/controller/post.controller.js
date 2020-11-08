var PostService = require('../services/post.service');

const createPost = (req, res) => {
    let post = req.body;
    return PostService.createPost(res, post);
}
const updatePost = (req, res) => {
    let content = req.body;
    return PostService.updatePost(res, content.query, content.newContent);
}
module.exports = {
    createPost, 
    updatePost
}
