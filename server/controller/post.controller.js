var PostService = require('../services/post.service');

const createPost = (req, res) => {
    let post = req.body;
    return PostService.createPost(res, post);
}
const updatePost = (req, res) => {
    let content = req.body;
    return PostService.updatePost(res, content.query, content.newContent);
}
const getPost = (req, res) => {
    return PostService.getPost(req, res);
}
const getAllPost = (req, res) => {
    return PostService.getAllPost(req, res);
}
const getPostByHashTag = (req, res) => {
    return PostService.getPostByHashTag(req, res);
}
module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    getPostByHashTag
}
