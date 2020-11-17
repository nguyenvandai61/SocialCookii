var UserService = require('../services/user.service');
const getAllUser = (req, res) => {
    return UserService.getAllUser(req, res);
}
const getUserByUsername = (req, res, username) => {
    req.query = {username: username};
    return UserService.getUser(req, res);
}
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

const checkLogin = async (req, res) => {
    let { username, password } = req.body;
    
    let user = getUserByUsername(req, res, username);
    if (user.length == 0)
        return res.status(500).json("Login failed");
    return res.status(200).json({"data": user[0]});
}
module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    checkLogin
}
