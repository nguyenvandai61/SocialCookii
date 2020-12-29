var Post = require('../models/post.model')


const createPost = (post) => {
    const newPost = new Post(post);
    return newPost.save();
}
const getAllPost = () => {
    return Post.find()
}

const getPost = (query) => {
  console.log(query);
  return Post.find(query)
    .populate({
      path: 'comments',
      populate: [
        { path: 'userId' },
        { path: 'repliedCommentId', 
          populate : { path: 'userId'}
        }
      ]
    });
}

const getPostByHashTag = (req, res) => {
    console.log(req.params);
    Post.find(req.params, (err, data) => {
        if(err) return res.status(500).send(err);
        if(data == null) return res.status(404).json({ message: "Cannot find Post" });
        return res.json(data);
    })
}

const getPostByTagname = (req, res) => {
    Post.find().populate({
        path: 'hashtagIds',
        match: {
          type: req.params.hashtagname
        }
      }).exec(function(err, posts) {
        if(err) return res.status(500).send(err);
        if(posts == null) return res.status(404).json({ message: "Cannot find Post" });
       
        return res.status(200).json(posts);
      });
}
const updatePost = (req, res) => {
    const content = req.body;
    Post.findOneAndUpdate(req.params.id, content, {new: true},function(err, doc) {
      if (err) return res.status(500).send(err);
      const response = {
          message: "Post successfully updated"
      };
      console.log(doc.description);
      return res.json(doc);
    });
  }

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, doc) => {
        if(err) return res.status(500).send(err);
        const response = {
            message: "Post successfully deleted"
        };
        return res.status(200).send(response);
    })
}

const likePost = (postId, likeUserId) => {
  console.log(postId);
  console.log(likeUserId);
  return Post.findOne({
    _id: postId
  }, (err, model) => {
    if (model.likeUserIds.indexOf(likeUserId) !== -1) {
      model.likeUserIds.pull(likeUserId);
    } else {
      model.likeUserIds.addToSet(likeUserId);
    }
    model.save();
  })
}
module.exports = {
    createPost, 
    updatePost,
    getPost,
    getAllPost,
    getPostByHashTag,
    likePost,
    deletePost,
    getPostByTagname
}

