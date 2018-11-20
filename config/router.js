const router = require('express').Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

const env = require('../config/environment');
const jwt = require('jsonwebtoken');


//Anais's side

function secureRoute(req, res, next) {
  if (!req.headers.authorization)
    res.status(401).json({ message: 'unauthorised'});
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token,env.secret, function(err) {
    if (err) {
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}



router.route('/items')
<<<<<<< HEAD
  .post(secureRoute, itemController.create);

router.route('/items/:id')
  .get(itemController.show)
  .put(secureRoute, itemController.update)
  .delete(secureRoute, itemController.delete);

router.route('/items/:itemId/comments')
  .post(secureRoute, commentController.create);

router.route('/items/:itemId/comments/:commentId')
  .delete(secureRoute, commentController.delete);
=======
  .post( secureRoute, itemController.create);

router.route('/items/:id')
  .get(itemController.show)
  .put( secureRoute, itemController.update)
  .delete( secureRoute, itemController.delete);

router.route('/items/:itemId/comments')
  .post( secureRoute, commentController.create);

router.route('/items/:itemId/comments/:commentId')
  .delete( secureRoute, commentController.delete);
>>>>>>> development

router.route('/users/:id')
  .get(userController.show);

//Joe's side


//Rafa's sides

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/items')
  .get(itemController.index);


//Joe's itemIndex route


module.exports = router;
