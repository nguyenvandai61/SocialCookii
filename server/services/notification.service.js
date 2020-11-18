var Notification = require('../models/notification.model');

const createNotification = (res, notification) => {
    const newNotification = new Notification(notification);
    newNotification.save(err => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newNotification);
    });
}

const getNotification = (req, res) => {
    Notification.find(req.query, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json({ "data": data });
    })
}

const updateNotification = (res, query, newData) => {
    const content = req.body;
    Notification.findOneAndUpdate(content.query, content.newData, function (err) {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Notification successfully updated"
        };
        return res.status(200).send(response);
    });
}
const deleteNotification = (res, query) => {
    Notification.deleteOne(query, (err, data) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Notification successfully deleted"
        };
        return res.status(200).send(response);
    })
}

const deleteAllNotifications = (req, res) => {
    Notification.deleteMany({}, (err, data) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "All questions successfully deleted"
        };
        return res.status(200).send(response);
    })
}

module.exports = {
    createNotification,
    getNotification,
    updateNotification,
    deleteNotification,
    deleteAllNotifications,
}