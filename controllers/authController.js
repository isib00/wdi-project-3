const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

function login(req, res, next) {
  User.findOne({ email: req.body.email })
  // console.log('login in function')
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id // jwt insists on sub here, short for 'subject'
        }, env.secret, { expiresIn: '1h' });
        res.json({
          message: `Welcome back, ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'Oops! Something went wrong!'
        });
      }
    })
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome to Orca, ${user.username}, password: ${req.body.password}, email: ${req.body.email}`
    }))
    .catch(next);
}

module.exports = {
  login: login,
  register: register
};
