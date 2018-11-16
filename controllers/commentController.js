const Fish = require('../models/fish');
function createRoute(req, res, next) {
  Fish.findById(req.params.fishId)
    .then(fish => {
      req.body.user = req.tokenUserId;
      fish.comments.push(req.body);
      // Save the changes back to the DB
      return fish.save();
    })
    .then(fish => Fish.populate(fish, 'createdBy comments.user'))
    .then(fish => res.json(fish))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Fish.findById(req.params.fishId)
    .then(fish => {
      const comment = fish.comments.id(req.params.commentId);
      // comments.id is a method of mongoose nested schema arrays
      comment.remove();
      return fish.save();
    })
    .then(fish => Fish.populate(fish, 'createdBy comments.user'))
    .then(fish => res.json(fish))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute
};
