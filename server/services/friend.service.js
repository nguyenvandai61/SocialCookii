var Friend = require('../models/friend.model');

const createFriend = (friend) => {
    const newFriend = new Friend(friend);
    return newFriend.save();
}

const getFriend = (query) => {
    return Friend.find(query);
}

const updateFriend = (query, newData) => {
    const content = req.body;
    return Friend.findOneAndUpdate(query, newData);
}

module.exports = {
    createFriend,
    getFriend,
    updateFriend,
}