var HashtagService = require('../services/hashtag.service');

const createHashtag = (req, res) => {
    let hashtag = req.body;
    console.log(hashtag)
    return HashtagService.createHashtag(hashtag).then((hashtag, err)=> {
        if (err)
            return res.status(500).send(err);
        return res.status(200).json(hashtag)
    });
}
module.exports = {
    createHashtag
}
