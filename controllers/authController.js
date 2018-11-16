const User = require('../models/user');


function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
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
