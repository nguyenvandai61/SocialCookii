const postService = require('../services/post.service');
var PostService = require('../services/post.service');
const Base64Image = require('../utils/Base64Image');
const {getUserInfo} = require('../services/user.service');
const userModel = require('../models/user.model');
const createPost = async (req, res) => {
    let post = req.body;
    post.thumbnails = post.thumbnails.map(thumbnail => {
        // var decodedImg = Base64Image.decodeBase64Image(thumbnail.img.data);
        // var imageBuffer = decodedImg.data;
        // var type = decodedImg.type;
        // var extension = type.split('/')[1];
        // var fileName =  thumbnail.name+'.' + extension;
        // var newPath = 'assets/image/posts/';
        // try{
        //     Base64Image.writeFile(newPath, fileName, imageBuffer);
        // }
        // catch(err){
        //     console.error(err)
        // }

        return thumbnail.img.data;
    })
    post.createdBy = {};
    post.createdBy._id = req.user.id;

    return await PostService.createPost(post).then((newPost, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    } );
}
const updatePost = (req, res) => {
    let query = req.body.query;
    let newPost = req.body.newObj;
    console.log(query);
    return PostService.updatePost(query, newPost).then((data, err) => {
        if (err) return res.status(500).send(err);
      const response = {
          message: "Post successfully updated"
      };
      return res.json(response);
    });
}
const getPost = (req, res) => {
    console.log("GET POST");
    return PostService.getPost(req.query).then((data,err) => {
        console.log(data.createdBy);
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find post" });
        return res.status(200).json(data);
    })
}

const getPostById = (req, res) => {
    console.log("GET POST BY ID");
    const paramId = req.params.id;
    return PostService.getPost({_id: paramId}).then((data,err) => {
        console.log(data.createdBy);
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find post" });
        return res.status(200).json(data);
    })
}
const getAllPost = (req, res) => {
    return PostService.getAllPost().then((posts, err) => {
        return res.status(200).json(posts);
    });
}

const deletePost = (req, res) => {
    let param = req.params.id;
    console.log("Delete post");
    return PostService.deletePost(param).then((data, err) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json("OK");
    });
}

const searchPost = (req, res) => {
    const keySearch = req.query.q;
    let query = { $text: { $search: keySearch } };
    return PostService.getPost(query).then((data, err) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(data);
    });
};

const likePost = (req, res) => {
    console.log(req.body);
    let postId = req.body.postId;
    let likeUserId = req.body.likeUserId;
    return PostService.likePost(postId, likeUserId).then((data, err) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    deletePost,
    searchPost,
    getPostById,
    likePost
}
