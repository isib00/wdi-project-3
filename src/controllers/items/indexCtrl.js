function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/items'
  }).then(result => {
    $scope.items = result.data;
    // $scope.filteredItems = $scope.allItems;
  });
  // $scope.handleFilterSubmit = function() {
  //   $scope.filteredItems = $scope.allItems.filter(item =>
  //
  //     // console.log('Filter form submitted!', item.itemName, item.location);
  //     item.itemName.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
  //     // item.location.toLowerCase().startsWith($scope.searchTerm.toLowerCase());
  //   );
  // };
}

export default indexCtrl;
