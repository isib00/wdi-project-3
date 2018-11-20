function showController($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }). then(result => {
    $scope.user = result.data;
  });
}

export default showController;
