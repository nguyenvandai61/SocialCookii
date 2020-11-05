var express = require('express');
const user = require('./user.routes');
var router = express.Router();


/* GET home page. */
router.use('/user', user);



module.exports = router;