const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

const createComment = (comment, res) => {
    console.log(comment);
    newComment = new Comment(comment);
    newComment.save()
        .then((result) => {
            Post.findOne({ _id: newComment.postId }, (err, post) => {
                if (post) {
                    // The below two lines will add the newly saved review's 
                    // ObjectID to the the User's reviews array field
                    console.log(post)
                    post.comments.push(newComment);
                    post.save();
                    return res.json(post);
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
}

const updateComment = (query, newData) => {
    return Comment.findByIdAndUpdate(query, newData, {new: true})
}

const deleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err, dov) => {
        if(err) return res.status(500).send(err);
        const response = {
            message: "Comment successfully deleted"
        };
        return res.status(200).send(response);
    });
}

const getCommnent = (query) => {
    return Comment.find(query)
    .populate({
      path: 'repliedCommentId'
    });
}

module.exports = {
    createComment,
    updateComment,
    deleteComment,
    getCommnent
}