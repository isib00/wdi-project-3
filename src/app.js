import angular from 'angular';
import '@uirouter/angularjs';


function Router($stateProvider) {
  $stateProvider
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    })
    .state('home', {
      templateUrl: './views/home.html',
      url: '/home'
    })
    .state('itemIndex', {
      templateUrl: './views/items/itemIndex.html',
      url: '/items',
      controller: function($scope, $http) {
        $http({
          method: 'GET',
          url: '/api/fishes'
        }).then(result => {
          $scope.items = result.data;
        });
      }
    })
    .state('contact', {
      templateUrl: './views/contact.html',
      url: '/contact'
    });
}

angular.module('wdi-project-3', ['ui.router'])
  .config(Router);
