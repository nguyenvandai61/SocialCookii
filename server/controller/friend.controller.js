var friendService = require('../services/friend.service');

const createFriend = (req, res) => {
    let Friend = req.body;
    return friendService.createFriend(res, Friend);
}

const updateFriend = (req, res) => {
    let content = req.body;
    return FriendService.updateFriend(res, content.query, content.newContent);
}

const getFriend = (req, res) => {
    return FriendService.getFriend(req, res);
}


module.exports = {
    createFriend,
    updateFriend,
    getFriend,
}