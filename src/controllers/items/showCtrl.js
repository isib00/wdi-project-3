function showCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/items/${$state.params.id}`
  }).then(result => {
    $scope.item = result.data;
  });

  

}

export default showCtrl;
