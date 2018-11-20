import indexCtrl from '../controllers/items/indexCtrl';
import loginCtrl from '../controllers/loginCtrl';
import registerCtrl from '../controllers/registerCtrl';
import itemsEditCtrl from '../controllers/items/editCtrl';
import itemsNewCtrl from '../controllers/items/newCtrl';
import itemsShowCtrl from '../controllers/items/showCtrl';
import userController from '../controllers/users/showController';



function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('profile', {
      templateUrl: './views/users/userShow.html',
      url: '/profile'
    })
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    })
    .state('contact', {
      templateUrl: './views/contact.html',
      url: '/contact'
    })
    .state('login', {
      templateUrl: './views/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('register', {
      templateUrl: './views/register.html',
      url: '/register',
      controller: registerCtrl
    })
    .state('itemsIndex', {
      templateUrl: './views/items/itemIndex.html',
      url: '/items',
      controller: indexCtrl
    })
    .state('itemsShow', {
      templateUrl: './views/items/show.html',
      url: '/items/:id',
      controller: itemsShowCtrl
    })
    .state('itemsNew', {
      url: '/items/new',
      templateUrl: './views/items/new.html',
      controller: itemsNewCtrl
      // resolve: { secureRoute }
    })
    .state('itemsEdit', {
      templateUrl: './views/items/edit.html',
      url: '/items/:id/edit',
      controller: itemsEditCtrl
      // resolve: { secureRoute }
    })
    .state('userShow', {
      templateUrl: './views/users/userShow.html',
      url: '/users/:id',
      controller: userController
    });
  $urlRouterProvider.otherwise('/');
}

export default Router;
