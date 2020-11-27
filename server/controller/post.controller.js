const { response } = require('express');
var PostService = require('../services/post.service');

const createPost = (req, res) => {
    let post = req.body;
    return PostService.createPost(post);
}
const updatePost = (req, res) => {
    return PostService.updatePost(query, newPost);
}
const getPost = (req, res) => {
    return PostService.getPost(query);
}
const getAllPost = (req, res) => {
    return PostService.getAllPost();
}

const deletePost = (req, res) => {
    return PostService.deletePost(query);
}
module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    deletePost,
}
