const Item = require('../models/item');
function createRoute(req, res, next) {
  Item.findById(req.params.itemId)
    .then(item => {
      req.body.user = req.tokenUserId;
      item.comments.push(req.body);
      console.log('req.body', req.body);
      return item.save();
    })
    .then(item => Item.populate(item, 'createdBy comments.user'))
    .then(item => res.json(item))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Item.findById(req.params.itemId)
    .then(item => {
      const comment = item.comments.id(req.params.commentId);
      comment.remove();
      return item.save();
    })
    .then(item => Item.populate(item, 'createdBy comments.user'))
    .then(item => res.json(item))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute
};
