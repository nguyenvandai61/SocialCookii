var Notification = require('../models/notification.model');

const createNotification = (res, notification) => {
    const newNotification = new Notification(notification);
    newNotification.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newNotification);
    });
}

module.exports = {
    createNotification,
}