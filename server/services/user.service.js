const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
var User = require('../models/user.model');
const getUser = (query) => {
  return User.find(query);
}
const getUserById = (id) => {
  return User.findById(id);
}
const getUserInfo = (id) => {
  console.log(id);
  return User.aggregate([
    {
      $match: {_id: ObjectId(id) }
    }, 
    {
      $project: {
        "_id": 1,
        "username": 1,
        "fullname": 1,
        "nfollowed": {$size: '$followed'},
        "nfollowing": {$size: '$following'},
        "followed": 1,
        "avatar": 1,
      }
    },
    { $limit: 1 }
  ]);
}

const getAllUser = (req, res) => {
  return User.find({})
}

const createUser = (user) => {
  const newUser = new User(user);
  return newUser.save();
}

const createUsers = (req, res) => {
  let arr = req.body;

  User.insertMany([...arr], (err, docs) => {
    console.log(err)
    if (err) return res.status(500).send(err);
    return res.status(200).json(docs);
  });
}
const getUserByName = (name) => {
  return User.findOne({ username: name });
}

const updateUser = (req, res) => {
  const content = req.body;
  console.log(req.params)
  console.log(req.query)
  User.findByIdAndUpdate(req.params.id, content,{new:true}, function (err, doc) {
    if (err) return res.status(500).send(err);
    const response = {
      message: "User successfully updated"
    };
    return res.status(200).json(doc);
  });
}
const following = (following, followed) => {
  return User.findOneAndUpdate(
    { _id: following }, 
    { $push: { following: followed} });
}
const followed = (following, followed) => {
  return User.findOneAndUpdate(
      { _id: followed }, 
      { $push: { followed: following} })
}
const unfollowing = (following, followed) => {
  return User.findOneAndUpdate(
    { _id: following }, 
    { $pull: {following: followed} });
}
const unfollowed = (following, followed) => {
  return User.findOneAndUpdate(
      { _id: followed }, 
      { $pull: { followed: following} })
}

const deleteUser = (res, query) => {
  return User.deleteOne(query)
}

const deleteAllUsers = (req, res) => {
  return User.deleteMany({});
}
const searchName = (query) => {
  return User.find({
    username: new RegExp(query)
  })
}
module.exports = {
  getUser,
  getUserInfo,
  getUserById,
  getUserByName,
  getAllUser,
  createUser,
  createUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
  following,
  followed,
  unfollowing,
  unfollowed,
  searchName,
}
