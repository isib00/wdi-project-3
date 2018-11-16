import fishesIndexCtrl from '../controllers/fishes/indexCtrl';
import loginCtrl from '../controllers/loginCtrl';
import fishesNewCtrl from '../controllers/fishes/newCtrl';
import fishesShowCtrl from '../controllers/fishes/showCtrl';
import fishesEditCtrl from '../controllers/fishes/editCtrl';

// NOTE: This function runs before the state is loaded IF the state has
// resolve: { secureRoute } on it.
function secureRoute($auth, $state, Flash) {
  if (!$auth.isAuthenticated()) {
    Flash.create('info', 'Please log in');
    $state.go('login');
  }
}

function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('login', {
      templateUrl: './views/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('fishesIndex', {
      templateUrl: './views/fishes/index.html',
      url: '/fishes',
      controller: fishesIndexCtrl
    })
    .state('fishesShow', {
      templateUrl: './views/fishes/show.html',
      url: '/fishes/:id',
      controller: fishesShowCtrl
    })
    .state('fishesNew', {
      url: '/fishes/new',
      templateUrl: './views/fishes/new.html',
      controller: fishesNewCtrl,
      // NOTE: 'resolve' is any functions which needs to be run before the state loads.
      // For example, it's possible to load data from the backend BEFORE the state
      // loads. This would prevent your users from seeing an empty page before the data
      // is available.
      resolve: { secureRoute }
    })
    .state('fishesEdit', {
      templateUrl: './views/fishes/edit.html',
      url: '/fishes/:id/edit',
      controller: fishesEditCtrl,
      resolve: { secureRoute }
    });
  // NOTE: Redirect to home whenever the url is invalid.
  //       This also adds the #! for us if it's not there!
  $urlRouterProvider.otherwise('/');
}

export default Router;
