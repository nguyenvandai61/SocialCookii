var Notification = require('../models/notification.model');

const createNotification = (notification) => {
    const newNotification = new Notification(notification);
    return newNotification.save();
}

const getNotification = (query) => {
    Notification.find(query, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json({ "data": data });
    })
}

const updateNotification = (query, newData) => {
    return Notification.findOneAndUpdate(query,newData);
}
const deleteNotification = (query) => {
    return Notification.deleteOne(query);
}

const deleteAllNotifications = (req, res) => {
    return Notification.deleteMany({})
}

module.exports = {
    createNotification,
    getNotification,
    updateNotification,
    deleteNotification,
    deleteAllNotifications,
}