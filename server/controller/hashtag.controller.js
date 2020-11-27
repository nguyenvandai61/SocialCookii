var HashtagService = require('../services/hashtag.service');

const createHashtag = (req, res) => {
    let hashtag = req.body;
    return HashtagService.createHashtag(hashtag).then((newHashtag, err) => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newHashtag);
    });
}
module.exports = {
    createHashtag
}
