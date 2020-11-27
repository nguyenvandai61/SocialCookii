var friendService = require('../services/friend.service');

const createFriend = (req, res) => {
    let Friend = req.body;
    return friendService.createFriend(Friend).then((newFriend, err) => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newFriend);
    });
}

const updateFriend = (req, res) => {
    let content = req.body;
    return FriendService.updateFriend(req.query, req.body).then((newFriend,err) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Friend successfully updated"
            };
            return res.status(200).send(response);
        }
    );
}

const getFriend = (req, res) => {
    return FriendService.getFriend(res.query).then((data, err) => {
        if (err) return res.status(500).send(err);
        res.json({ "data": data });
    });
}


module.exports = {
    createFriend,
    updateFriend,
    getFriend,
}