//hey this is anais
// console.log('hey guys! this is the best group ever')

//Joe's itemIndex route

const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.route('/items')
  .get(itemsController.index);

module.exports = router;
