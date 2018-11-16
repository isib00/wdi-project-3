const router = require('express').Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');


// console.log('hey guys! this is the best group ever')


//Anais's side


//Joe's side


//Rafa's side

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/items')
  .get(itemController.index);


//Joe's itemIndex route


module.exports = router;
