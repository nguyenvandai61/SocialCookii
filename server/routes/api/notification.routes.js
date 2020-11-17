var express = require('express');
const notificationController = require('../../controller/notification.controller');
var router = express.Router();


//router.get('/', (req, res)=> notificationController.getNotification(req, res))
router.post('/', (req, res) => {
    if (Array.isArray(req.body))
        return notificationController.createNotifications(req, res)
    return notificationController.createNotification(req, res)
})
module.exports = router