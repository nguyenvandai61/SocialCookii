const { response } = require('express');
var PostService = require('../services/post.service');

const createPost = async (req, res) => {
    let post = req.body;
    console.log(post)
    return await PostService.createPost(post).then((newPost, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    } );
}
const updatePost = (req, res) => {
    return PostService.updatePost(query, newPost);
}
const getPost = (req, res) => {
    return PostService.getPost(query);
}
const getAllPost = (req, res) => {
    return PostService.getAllPost().then((posts, err) => {
        return res.status(200).json(posts);
    });
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
