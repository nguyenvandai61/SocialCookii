var express = require('express');
const user = require('./user.routes');
const hashtag = require('./hashtag.routes');
const post = require('./post.routes');
const comment = require('./comment.routes');
const notification = require('./notification.routes');
const friend = require('./friend.routes');
// const emotion = require('./emotion.routes');
var router = express.Router();


/* GET home page. */
router.use('/user', user);
router.use('/hashtag', hashtag);
router.use('/post', post);
router.use('/comment', comment);
router.use('/friend', friend);
router.use('/notification', notification);
// router.use('/emotion', emotion);
module.exports = router;