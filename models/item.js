const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemName: { type: String, required: true },
  imageUrl: String,
  seller: String,
  //assign an array of categories to every item
  categories: [String],
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

itemSchema.virtual('fullName')
  .get(function() {
    return `${this.itemName} (${this.seller})`;
  });

itemSchema.virtual('firstLetter')
  .get(function() {
    return this.itemName[0];
  });

// include virtuals in res.json
itemSchema.set('toJSON', {
  virtuals: true
});

const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;
