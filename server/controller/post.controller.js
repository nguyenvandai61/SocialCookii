const postService = require('../services/post.service');
var PostService = require('../services/post.service');
const Base64Image = require('../utils/Base64Image');
const {getUserInfo} = require('../services/user.service');
const userModel = require('../models/user.model');
const createPost = async (req, res) => {
    let post = req.body;
    post.thumbnails = post.thumbnails.map(thumbnail => {
        var decodedImg = Base64Image.decodeBase64Image(thumbnail.img.data);
        var imageBuffer = decodedImg.data;
        var type = decodedImg.type;
        var extension = type.split('/')[1];
        var fileName =  thumbnail.name+'.' + extension;
        var newPath = 'assets/image/posts/';
        try{
            Base64Image.writeFile(newPath, fileName, imageBuffer);
        }
        catch(err){
            console.error(err)
        }
        return 'image/posts/'+fileName;
    })
    post.createdBy = {};
    post.createdBy._id = req.user.id;
    console.log("IDDD"+post.createdBy._id);

    return await PostService.createPost(post).then((newPost, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    } );
}
const updatePost = (req, res) => {
    return PostService.updatePost(query, newPost);
}
const getPost = (req, res) => {
    let query = {_id: req.params.id};
    console.log(req.params.id);
    return postService.getPost(query).then((data,err) => {
        console.log(data);
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find post" });
        return res.status(200).json(data)
    })
}
const getAllPost = (req, res) => {
    return PostService.getAllPost().then((posts, err) => {
        return res.status(200).json(posts);
    });
}

const deletePost = (req, res) => {
    return PostService.deletePost(query);
}

const searchPost = (req, res) => {
    const keySearch = req.query.q;
    let query = { $text: { $search: keySearch } };
    return PostService.getPost(query).then((data, err) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(data);
    });
}

module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    deletePost,
    searchPost
}
