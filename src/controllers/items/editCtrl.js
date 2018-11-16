function editCtrl($scope, $state, $http) {
  // Fetch the fish to populate the form
  $http({
    method: 'GET',
    url: `/api/fishes/${$state.params.id}`
  }).then(result => $scope.fish = result.data);
  $scope.handleSubmit = function() {
    // Here we request the UPDATE route:
    $http({
      method: 'PUT',
      url: `/api/fishes/${$state.params.id}`,
      data: $scope.fish
    }).then(() => $state.go('fishesShow', { id: $state.params.id }));
  };
}

export default editCtrl;
