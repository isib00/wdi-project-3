const Item = require('../models/item');

function like(req, res, next) {
  Item
    .findById(req.params.itemId)
    .then(item => {
      console.log('this is the item', item);
      if (!item.likes.find(userId =>
        userId.toString() === req.tokenUserId)) {
        item.likes.push(req.tokenUserId);
        return item.save();
      } else {
        res.status(422).json({ message: 'Cannot like twice'});
        next();
      }
    })
    .then(item => res.json(item))
    .catch(next);
}

function unlike(req, res, next) {
  Item
    .findById(req.params.itemId)
    .then(item => {
      if (!item.likes.find(userId => userId.toString() === req.tokenUserId)) {
        res.status(422).json({ message: 'No vote to remove'});
      } else {
        console.log('unvote');
        item.likes = item.likes.filter(x => x.toString() !== req.tokenUserId);
        return item.save();
      }
    })
    .then(item => res.json(item))
    .catch(next);
}

module.exports = {
  like: like,
  unlike: unlike
};
