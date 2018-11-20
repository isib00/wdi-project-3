const router = require('express').Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const jwt = require('jsonwebtoken');

function secureRoute(req, res, next) {
  if (!req.headers.authorization)
    res.status(401).json({ message: 'unauthorised'});
  // Remove the Bearer bit from the start of the header:
  const token = req.headers.authorization.replace('Bearer ', '');
  // Check the token matches our secret with jwt.verify.
  // 3 arguments: token, secret, callback function which runs if
  // the token checks out
  jwt.verify(token, 'jafais', function(err) {
    // If err is undefined, we know the token checked out.
    // Otherwise it was bad.
    if (err) {
      // The token was bad
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      // The token was good. Continue on our journey...
      // Get the user ID out of the token and store it!
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

//Anais's side
router.route('/items')
  .post( secureRoute, itemController.create);

router.route('/items/:id')
  .get(itemController.show)
  .put( secureRoute, itemController.update)
  .delete( secureRoute, itemController.delete);

router.route('/items/:itemId/comments')
  .post( secureRoute, commentController.create);

router.route('/items/:itemId/comments/:commentId')
  .delete( secureRoute, commentController.delete);

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
