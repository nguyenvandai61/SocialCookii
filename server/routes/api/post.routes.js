var express = require('express');
const postController = require('../../controller/post.controller');
var router = express.Router();


router.post('/', (req, res)=> {
    if (Array.isArray(req.body))
        return postController.createPost(req, res)
    return postController.createPost(req, res);
})

router.put('/', (req, res)=> postController.updatePost) ;  

module.exports = router