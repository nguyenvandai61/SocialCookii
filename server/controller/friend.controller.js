var friendService = require('../services/friend.service');

const createFriend = (req, res) => {
    let Friend = req.body;
    return friendService.createFriend(res, Friend);
}

module.exports = {
    createFriend,
}