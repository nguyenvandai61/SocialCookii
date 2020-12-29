var express = require('express');
const passport = require('passport');

const commentController = require('../../controller/comment.controller');
var router = express.Router();

router.post('/', 
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        console.log("authen success");
        if (Array.isArray(req.body))
            return commentController.createComment(req, res);
        return await commentController.createComment(req, res);
    })
router.post('/likeComment',
(req, res) => {
    return commentController.likeComment(req, res);
})

router.get('/',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        if (req.query.q == null) {
            return commentController.getAllComment(req, res);
        }
    })
 
router.get('/:id',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        return commentController.getCommnent(req, res);
    })    

router.put('/:id',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        return commentController.updateComment(req, res);
    });





module.exports = router