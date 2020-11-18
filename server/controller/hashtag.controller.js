var HashtagService = require('../services/hashtag.service');

const createHashtag = (req, res) => {
    let hashtag = req.body;
    return HashtagService.createHashtag(res, hashtag);
}
module.exports = {
    createHashtag
}
