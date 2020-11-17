var Hashtag = require('../models/hashtag.model')

const createHashtag = (res, hashtag) => {
    const newHashtag = new Hashtag(hashtag);
    newHashtag.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newHashtag);
    });
}

module.exports = {
    createHashtag
}

