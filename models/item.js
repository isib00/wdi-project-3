const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemName: { type: String, required: true },
  imageUrl: String,
  seller: String,
  //assign an array of categories to every item
  catgories: [String],
  price: Number,
  // rating: Number ---> let us do that after we have reached MVP: it's complicated
  uploadDate: { type: Date, default: Date.now },
  location: String,
  sizes: String,
  colour: String,
  //Users can comment on items
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ],
  //links the item to the seller's id:
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});


const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;
