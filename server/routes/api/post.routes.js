var express = require('express');
const postController = require('../../controller/post.controller');
var router = express.Router();


router.post('/', (req, res)=> {
    if (Array.isArray(req.body))
        return postController.createPost(req, res)
    return postController.createPost(req, res);
})
 router.get('/', (req, res) => {
     return postController.getAllPost(req, res);
 })

 router.get('/:id', (req, res) => {
     return postController.getPost(req, res);
 })

 router.get('/hashtag/:hashtagIds', (req, res) => {
    return postController.getPostByHashTag(req, res);
})

router.put('/', (req, res)=> postController.updatePost) ;  
 
module.exports = router