const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // we could improve that with a virtual !!!!
  // itemsForSale: [String],
  // we could improve this with maps:
  location: String,
  // we might do that after we have reached MVP:
  // rating: String,
  //users can also comment on sellers, so that you can see the comments
  //about sellers on their individual show pages:
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ]
});

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
