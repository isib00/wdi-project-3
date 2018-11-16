const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Create a pre-save hook (a function which runs before
// saving to the db):
userSchema.pre('save', function() {
  // This is the function which runs before saving...
  // In here, 'this' refers to the object being saved.
  this.password = bcrypt.hashSync(this.password, 8);
});

// Add a method to validate the password:
userSchema.methods.validatePassword = function(attemptedPassword) {
  // Check the plain text password against the hash in the database
  // (this.password)
  return bcrypt.compareSync(attemptedPassword, this.password);
};
// We can now do user.validatePassword()

// Get all a users fish:
userSchema.virtual('fishesCreated', {
  ref: 'Fish',
  localField: '_id',
  foreignField: 'createdBy'
});

// include virtuals in res.json
userSchema.set('toJSON', {
  virtuals: true
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
