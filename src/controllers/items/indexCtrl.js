function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/items'
  }).then(result => {
    $scope.allItems = result.data;
    // $scope.filteredItems = $scope.allItems;
  });
}

export default indexCtrl;
