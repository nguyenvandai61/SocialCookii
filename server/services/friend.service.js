var Friend = require('../models/Friend.model');

const createFriend = (res, friend) => {
    const newFriend = new Friend(friend);
    newFriend.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newFriend);
    });
}

module.exports = {
    createFriend,
}