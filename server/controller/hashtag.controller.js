var HashtagService = require('../services/hashtag.service');

const createHashtag = async (req, res) => {
    let hashtag = req.body;
    const newHashtag = await HashtagService.createHashtag(hashtag);
    if (err)
        return res.status(500).send(err);
    return res.status(200).json(newHashtag);
}
module.exports = {
    createHashtag
}
