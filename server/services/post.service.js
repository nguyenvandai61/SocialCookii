var Post = require('../models/post.model')


const createPost = (res, post) => {
    const newPost = new Post(post);
    newPost.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPost);
    });
}
const getAllPost = (req, res) => {
    Post.find((err, data) => {
        if(err) return res.status(500).send(err);
        return res.json({"data": data})
    });
}

const getPost = (req, res) => {
    Post.findById(req.params.id, (err, data) => {
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find User" });
        return res.json({"data": data})
    })
}

const getPostByHashTag = (req, res) => {
    console.log(req.params);
    Post.find(req.params, (err, data) => {
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find Post" });
        return res.json({"data" : data});
    })
}
const updatePost = (req, res) => {
    const content = req.body;
    console.log(content);
    Post.findOneAndUpdate(req.params.id, content, {new: true},function(err, doc) {
      if (err) return res.status(500).send(err);
      const response = {
          message: "Post successfully updated"
      };
      console.log(doc.description);
      return res.json({"data" : doc});
    });
  }

module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    getPostByHashTag
}

