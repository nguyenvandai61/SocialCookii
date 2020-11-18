var express = require('express');
const hashtagController = require('../../controller/hashtag.controller');
var router = express.Router();


router.post('/', (req, res)=> {
    if (Array.isArray(req.body))
        return hashtagController.createHashtag(req, res)
    return hashtagController.createHashtag(req, res);
})

    

module.exports = router