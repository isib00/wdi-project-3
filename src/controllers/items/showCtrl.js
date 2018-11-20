function showCtrl($state, $scope, $http) {
  $scope.comment = {};
  $http({
    method: 'GET',
    url: `/api/items/${$state.params.id}`
  }).then(result => {
    $scope.item = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/items/${$scope.item._id}`
    }).then(() => $state.go('itemsIndex'));
  };
}

export default showCtrl;
