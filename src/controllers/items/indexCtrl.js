function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/items'
  }).then(result => {
    $scope.allItems = result.data;
    $scope.filteredItems = $scope.allItems;
  });
  $scope.handleFilterSubmit = function() {
    console.log('Filter form submitted!', $scope.searchTerm);
    $scope.filteredItems = $scope.allItems.filter(item =>
      item.itemName.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
      // item.categories.toLowerCase().startsWith($scope.searchTerm);
    );
  };
}

export default indexCtrl;
