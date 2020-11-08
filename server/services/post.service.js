var Post = require('../models/post.model')

const createPost = (res, post) => {
    const newPost = new Post(post);
    newPost.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    });
}

module.exports = {
    createPost
}

