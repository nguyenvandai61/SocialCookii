var express = require('express');
const user = require('./user.routes');
const hashtag = require('./hashtag.routes');
const post = require('./post.routes');
const comment = require('./comment.routes');
var router = express.Router();


/* GET home page. */
router.use('/user', user);
router.use('/hashtag', hashtag);
router.use('/post', post);
router.use('/comment', comment);

module.exports = router;