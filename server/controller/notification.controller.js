var notificationService = require('../services/notification.service');

const createNotification = (req, res) => {
    let Notification = req.body;
    return notificationService.createNotification(res, Notification);
}

const updateNotification = (req, res) => {
    let content = req.body;
    return NotificationService.updateNotification(res, content.query, content.newContent);
}

const deleteNotification = (req, res) => {
    let query = req.body.query;
    return NotificationService.deleteNotification(res, query);
}

module.exports = {
    createNotification,
    updateNotification,
    deleteNotification,
}