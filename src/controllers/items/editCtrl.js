function editCtrl($scope, $state, $http) {
  $http({
    method: 'GET',
    url: `/api/items/${$state.params.id}`
  }).then(result => $scope.item = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/items/${$state.params.id}`,
      data: $scope.item
    }).then(() => $state.go('itemsShow', { id: $state.params.id }));
  };
}

export default editCtrl;
