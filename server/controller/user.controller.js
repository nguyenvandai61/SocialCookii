// const userService = require('../services/user.service');
var UserService = require('../services/user.service');
const getAllUser = (req, res) => {
    UserService.getAllUser().then((data, err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(data);
    });
}
const getUserByUsername = (req, res) => {
    req.query = req.body.username;
    return UserService.getUser(req, res);
}
const createUser = (req, res) => {
    let user = req.body;
    return UserService.createUser(user).then((newUser, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newUser);
    });
}
const updateUser = (req, res) => {
    let content = req.body;
    return UserService.updateUser(content.query, content.newContent);
}

const deleteUser = (req, res) => {
    let query = req.body.query;
    return UserService.deleteUser(query).then(
        (data, err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(data);
          }
    );
}

const deleteAllUsers = (req, res) => {
    return UserService.deleteAllUsers().then((data, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(data);
      })
}
const checkLogin = async (req, res) => {
    let { username, password } = req.body;
    req.query = req.body;
    return UserService.getUser(req.query).then((user, err) => {
        console.log(user);
        if (user.length == 0)
            return res.status(401).json("Login failed");
        return res.status(200).json({data: user[0]});
    })
}
module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers,
    checkLogin
}
