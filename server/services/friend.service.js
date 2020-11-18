var Friend = require('../models/friend.model');

const createFriend = (res, friend) => {
    const newFriend = new Friend(friend);
    newFriend.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newFriend);
    });
}

const getFriend = (req, res) => {
    Friend.find(req.query, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json({ "data": data });
    })
}

const updateFriend = (res, query, newData) => {
    const content = req.body;
    Friend.findOneAndUpdate(content.query, content.newData, function (err) {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Friend successfully updated"
        };
        return res.status(200).send(response);
    });
}

module.exports = {
    createFriend,
    getFriend,
    updateFriend,
}