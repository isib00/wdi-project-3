import angular from 'angular';
import '@uirouter/angularjs';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    });
}
