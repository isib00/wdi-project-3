const jwt = require('jsonwebtoken');
const User = require('../models/user');
const env = require('../config/environment');

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    // user is a model instance! It now has
    // user.validatePassword()
    .then(user => {
      // Check there is a user with this email
      if (user && user.validatePassword(req.body.password)) {
        // Create a token: jwt.sign
        // Three arguments: data to encrypt, secret, options
        const token = jwt.sign({
          username: user.username,
          fruit: 'Banana',
          sub: user._id // jwt insists on sub here, short for 'subject'
        }, env.secret, { expiresIn: '24h' });
        res.json({
          message: `Welcome back ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'Not this time mateyboy'
        });
      }
    })
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

module.exports = {
  login: login,
  register: register
};
