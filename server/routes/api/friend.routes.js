var express = require('express');
const friendController = require('../../controller/friend.controller');
var router = express.Router();


//router.get('/', (req, res)=> notificationController.getNotification(req, res))
router.post('/', (req, res) => {
    if (Array.isArray(req.body))
        return friendController.createFriend(req, res)
    return friendController.createFriend(req, res)
})
module.exports = router