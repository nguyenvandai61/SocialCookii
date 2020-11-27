const path = require("path");
const multer = require("multer");
const { response } = require('express');
const fs = require('fs');
var PostService = require('../services/post.service');
function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
  
    return response;
}
const createPost = async (req, res) => {
    let post = req.body;
    console.log("lolo")
    post.thumbnails = post.thumbnails.map(thumbnail => {
        var decodedImg = decodeBase64Image(thumbnail.img.data);
        var imageBuffer = decodedImg.data;
        var type = decodedImg.type;
        var extension = type.split('/')[1];
        var fileName =  thumbnail.name+'.' + extension;
        console.log(fileName)
        try{
            fs.writeFileSync('assets/image/posts'+fileName, imageBuffer, 'utf8');
        }
        catch(err){
            console.error(err)
        }
        return fileName;
    })
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
