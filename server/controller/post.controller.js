var PostService = require('../services/post.service');
const Base64Image = require('../utils/Base64Image');

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
