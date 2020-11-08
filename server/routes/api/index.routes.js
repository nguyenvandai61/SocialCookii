var express = require('express');
const user = require('./user.routes');
const hashtag = require('./hashtag.routes');
const post = require('./post.routes');
var router = express.Router();


/* GET home page. */
router.use('/user', user);
router.use('/hashtag', hashtag);
router.use('/post', post);



module.exports = router;