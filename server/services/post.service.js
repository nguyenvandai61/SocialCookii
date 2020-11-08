var Post = require('../models/post.model')

const createPost = (res, post) => {
    const newPost = new Post(post);
    newPost.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    });
}

const updatePost = (res, query, newData) => {
    const content = req.body;
    User.findOneAndUpdate(content.query, content.newData, function(err) {
      if (err) return res.status(500).send(err);
      const response = {
          message: "Post successfully updated"
      };
      return res.status(200).send(response);
    });
  }

module.exports = {
    createPost, updatePost
}

