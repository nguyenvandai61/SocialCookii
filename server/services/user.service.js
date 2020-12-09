var User = require('../models/user.model');

const getUser = (query) => {
  return User.find(query);
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


const updateUser = (res, query, newData) => {
  const content = req.body;
  User.findOneAndUpdate(content.query, content.newData, function(err) {
    if (err) return res.status(500).send(err);
    const response = {
        message: "User successfully updated"
    };
    return res.status(200).send(response);
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
  getAllUser,
  createUser,
  createUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
}
