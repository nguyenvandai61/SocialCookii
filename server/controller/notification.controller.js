var notificationService = require('../services/notification.service');

const createNotification = (req, res) => {
    let Notification = req.body;
    return notificationService.createNotification(res, Notification);
}

module.exports = {
    createNotification,
}