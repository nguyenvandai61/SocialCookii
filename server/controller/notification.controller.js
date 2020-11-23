var NotificationService = require('../services/notification.service');

const createNotification = (req, res) => {
    let Notification = req.body;
    return NotificationService.createNotification(Notification).then((newNotification, err) => {
        console.log(err)
        if (err) return res.status(500).send(err);
        return res.status(200).json(newNotification);
    });
}

const updateNotification = (req, res) => {
    let content = req.body;
    return NotificationService.updateNotification(res, content.query, content.newContent).then(
        (newNotification, err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newNotification);
        }
    );
}

const deleteNotification = (req, res) => {
    let query = req.body.query;
    return NotificationService.deleteNotification(res, query);
}
const deleteAllNotification = (req, res) => {
    return NotificationService.deleteAllNotifications().then((data, err ) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "All questions successfully deleted"
        };
        return res.status(200).send(response);
    });
}

const getNotification = (req, res) => {
    return NotificationService.getNotification(req, res);
}

module.exports = {
    createNotification,
    updateNotification,
    deleteNotification,
    getNotification,
}