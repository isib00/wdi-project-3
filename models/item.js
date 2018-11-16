const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemName: { type: String, required: true },
  seller: String,
  imageUrl: String,
  catgories: Array,
  price: Number,
  rating: Number,
  uploadDate: Date,
  location: String,
  sizes: String,
  colour: String,
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});


const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;
