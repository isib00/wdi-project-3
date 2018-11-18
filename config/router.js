const router = require('express').Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');


// console.log('hey guys! this is the best group ever')


//Anais's side
router.route('/items')
  .post( itemController.create);

router.route('/items/:id')
  .get(itemController.show)
  .put( itemController.update)
  .delete( itemController.delete);

router.route('/items/:itemId/comments')
  .post( commentController.create);

router.route('/items/:itemId/comments/:commentId')
  .delete( commentController.delete);

router.route('/users/:id')
  .get(userController.show);


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
