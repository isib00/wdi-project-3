const Item = require('../models/item');


function indexRoute(req, res, next) {
  console.log('this is the item index route running');
  Item.find().then(items => res.json(items))
    .catch(next);
}


module.exports = {
  indexRoute: indexRoute
};
