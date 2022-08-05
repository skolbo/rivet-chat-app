const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const users = 
  [{ _id: 1, username: 'Stephen', password : 'letmein'}, 
   { _id: 2, username: 'Jason', password: 'letmein'},
   { _id: 3, username: "Zkiah", password: 'letmein'},
   { _id: 4, username: 'Farhan', password: 'letmein'}
  ]

module.exports.signup = async (req, res, next) => {
  const {username, email, password} = req.body;
  const usernameUnique = await User.findOne({ username });
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let user = null;
    users.forEach(element => {
      if (element.username == username && element.password == password)
      {
        user = element;
        return;
      }
    });
   
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    //delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const user = users.find(element => element._id == req.params.id);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
