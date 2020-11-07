var UserService = require('../services/user.service');

const createUser = (req, res) => {
    let user = req.body;
    return UserService.createUser(res, user);
}
const updateUser = (req, res) => {
    let content = req.body;
    return UserService.updateUser(res, content.query, content.newContent);
}

const deleteUser = (req, res) => {
    let query = req.body.query;
    return UserService.deleteUser(res, query);
}
module.exports = {
    createUser,
    updateUser,
    deleteUser
}
