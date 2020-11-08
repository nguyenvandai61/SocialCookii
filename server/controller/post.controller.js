var PostService = require('../services/post.service');

const createPost = (req, res) => {
    let post = req.body;
    return PostService.createPost(res, post);
}
module.exports = {
    createPost
}
