var User = require('../models/user.model');

const getUser = (query) => {
  return User.find(query);
}
const getUserById = (id) => {
  return User.findById(id);
}
const getUserInfo = (id) => {
  // console.log(User.find(query).select("_id -username -fullname -avatar"));
  return User.findById(id).select({ 
    "_id": 1,
    "username": 1,
    "fullname": 1, 
    "avatar": 1
  });;
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
  return User.findOne({username: name});
}

const updateUser = (req, res) => {
  const content = req.body;
  console.log(req.params)
  console.log(req.query)
  User.findByIdAndUpdate(req.params.id, content,  function(err, doc) {
    if (err) return res.status(500).send(err);
    const response = {
        message: "User successfully updated"
    };
    return res.status(200).json({"data" : doc});
  });
}

const deleteUser = (res, query) => {
   return User.deleteOne(query)
}

const deleteAllUsers = (req, res) => {
  return User.deleteMany({});
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
}
