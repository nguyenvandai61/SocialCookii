var Hashtag = require('../models/hashtag.model')

const createHashtag = (res, hashtag) => {
    const newHashtag = new Hashtag(hashtag);
    return newHashtag.save();
}

module.exports = {
    createHashtag
}

