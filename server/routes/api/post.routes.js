var express = require('express');
const postController = require('../../controller/post.controller');
const passport = require('passport');
var router = express.Router();
router.post(
    '/',
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        console.log("authen success");
        if (Array.isArray(req.body))
            return postController.createPost(req, res)
        return await postController.createPost(req, res);
    })
router.get('/',
    // passport.authenticate('jwt', {session: false}),
    (req, res) => {
        console.log(req.query.q);
        if (req.query.q == null) {
            return postController.getAllPost(req, res);
        }
        else return postController.searchPost(req, res);
    })

router.put('/:id', (req, res) => {
    return postController.updatePost(req, res);
})

router.get(
    '/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log("Authen success");
        return postController.getPost(req, res);
    })

//  router.get('/hashtag/:hashtagname', (req, res) => {
//     return postController.getPostByHashTag(req, res);
// })


router.get('/hashtag/:hashtagname', (req, res) => {
    return postController.getPostByTagname(req, res);
})
router.put('/', (req, res) => postController.updatePost);

router.delete('/:id', (req, res) => {
    return postController.deletePost(req, res);
})
module.exports = router