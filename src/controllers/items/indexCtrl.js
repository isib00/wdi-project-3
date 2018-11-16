function indexCtrl($scope, $http, $auth) {
  $http({
    method: 'GET',
    url: '/api/fishes'
  }).then(result => {
    // allFishes is every fish in the database
    $scope.allFishes = result.data;
    // filteredFishes will contain the filtered fish once
    // the user has entered a search term
    $scope.filteredFishes = $scope.allFishes;
  });

  $scope.handleFilterSubmit = function() {
    console.log('Filter form submitted!', $scope.searchTerm);
    $scope.filteredFishes = $scope.allFishes.filter(fish =>
      fish.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
    );
  };
}

export default indexCtrl;
