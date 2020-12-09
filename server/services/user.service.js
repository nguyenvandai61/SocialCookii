var User = require('../models/user.model');

const getUser = (query) => {
  return User.find(query);
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


const updateUser = (req, res) => {
  const content = req.body;
  console.log(req.params)
  console.log(req.query)
  User.findByIdAndUpdate(req.params.id, content,  function(err, doc) {
    if (err) return res.status(500).send(err);
    const response = {
        message: "User successfully updated"
    };
    console.log(doc)
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
  getAllUser,
  createUser,
  createUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
}
