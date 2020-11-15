var User = require('../models/user.model');

const getUser = (req, res) => {
  User.find(req.query, (err, data) => {
    if (err) return res.status(500).send(err);
    res.json({"data": data});
  })
}



const createUser = (res, user) => {
  const newUser = new User(user);
  newUser.save(err => {  
    console.log(err)
    if (err) return res.status(500).send(err);
    return res.status(200).json(newUser);
  });
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
   User.deleteOne(query, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "User successfully deleted"
    };
    return res.status(200).send(response);
  })
}

const deleteAllUsers = (req, res) => {
  User.deleteMany({}, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "All questions successfully deleted"
    };
    return res.status(200).send(response);
  })
}

const checkLogin = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({username: username}, (err, user) => {
    if(err) return res.json(err);
    else if(!user) return res.json({err: 'Username and Password are incorrect'})
    else {
      if(password === user.password) {
        res.json({
          username: user.username,
          password: user.password,
          message: 'Login successfully'
        })
      }else res.json({
        message: 'Username and Password are incorrect'
      })
    } 
  })
}

module.exports = {
  getUser,
  createUser,
  createUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
  checkLogin
}
