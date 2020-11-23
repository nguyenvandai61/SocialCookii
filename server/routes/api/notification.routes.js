var express = require('express');
const notificationController = require('../../controller/notification.controller');
var router = express.Router();


//router.get('/', (req, res)=> notificationController.getNotification(req, res))
router.post('/', (req, res) => {
    if (Array.isArray(req.body))
        return notificationController.createNotifications(req, res)
    return notificationController.createNotification(req, res)
})

router.get('/', (req, res)=> notificationController.getNotification(req, res))

router.put('/', (req, res)=> notificationController.updateNotification)

router.delete('/', (req, res)=> {
    // Neu req.body rong thi xoa het
    if (Object.keys(req.query).length == 0)    
        return notificationController.deleteAllNotifications(req, res);  
    return notificationController.deleteNotification(req, res)
})

module.exports = router