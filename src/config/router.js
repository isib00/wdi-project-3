import itemsIndexCtrl from '../controllers/items/indexCtrl';
import loginCtrl from '../controllers/loginCtrl';
import registerCtrl from '../controllers/registerCtrl';





function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('contatc', {
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
      templateUrl: './views/items/index.html',
      url: '/items',
      controller: itemsIndexCtrl
    });
  // NOTE: Redirect to home whenever the url is invalid.
  //       This also adds the #! for us if it's not there!
  $urlRouterProvider.otherwise('/');
}

export default Router;
