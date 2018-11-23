const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // we could improve that with a virtual !!!!
  // itemsForSale: [String],
  // we could improve this with maps:
  location: String,
  // we might do that after we have reached MVP:
  rating: [{ type: mongoose.Schema.ObjectId, ref: 'Users' }],
  //users can also comment on sellers, so that you can see the comments
  //about sellers on their individual show pages:
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ]
});

userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};






//Get all the items that a seller has uploaded:
userSchema.virtual('itemsForSale', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema.set('toJSON', {
  virtuals: true
});


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
