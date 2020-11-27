var express = require('express');
const postController = require('../../controller/post.controller');
var router = express.Router();
router.post('/', async (req, res)=> {
    console.log(req.body);
    if (Array.isArray(req.body))
        return postController.createPost(req, res)
    return await postController.createPost(req, res);
})
 router.get('/', (req, res) => {
     return postController.getAllPost(req, res);
 })

 router.put('/:id', (req, res) => {
    return postController.updatePost(req, res);
})

 router.get('/:id', (req, res) => {
     return postController.getPost(req, res);
 })

//  router.get('/hashtag/:hashtagname', (req, res) => {
//     return postController.getPostByHashTag(req, res);
// })

router.get('/hashtag/:hashtagname', (req, res) => {
    return postController.getPostByTagname(req, res);
})
router.put('/', (req, res)=> postController.updatePost) ;  
 
router.delete('/:id', (req, res) => {
    return postController.deletePost(req, res);
})
module.exports = router