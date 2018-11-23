const Item = require('../models/item');

function indexRoute(req, res, next) {
  Item.find().then(items => res.json(items))
    .catch(next);
}

function showRoute(req, res, next) {
  Item.findById(req.params.id)
    .populate('createdBy comments.user')
    .then(item => res.json(item))
    .catch(next);
}

function createRoute(req, res, next) {
  if (!Object.keys(req.body).length) {
    return res.status(401).json({ message: 'no data given' });
  } else {
    Item.create(req.body)
      .then(item => res.json(item))
      .catch(next);
  }
}

function updateRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => item.set(req.body))
    .then(item => item.save())
    .then(item => res.json(item))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
