const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

const createComment = (comment, res) => {
    console.log(comment);
    newComment = new Comment(comment);
    if(newComment.isRepliedComment == true) {
        newComment.save()
        .then((result) => {
             return res.json(result)  
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
    }else {
        newComment.save()
        .then((result) => {
             Post.findOne({ _id: newComment.postId }, (err, post) => {
                if (post) {
                    // The below two lines will add the newly saved review's 
                    // ObjectID to the the User's reviews array field
                    console.log(post)
                    post.comments.push(newComment);
                    post.save();                  
                    return res.json(result);
                }
            });   
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
    }
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

const likeComment = (commentId, likeUserId) => {
    console.log(commentId);
    console.log(likeUserId);
    return Comment.findOne({
        _id: commentId
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
    createComment,
    updateComment,
    deleteComment,
    getCommnent,
    likeComment
}