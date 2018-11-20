function newCtrl($scope, $http, $state, $auth) {
  $scope.item = {};
  $scope.handleSubmit = function() {
    $scope.item.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/items',
      data: $scope.item
    }).then(result => $state.go('itemsShow', {
      id: result.data._id
    })).catch(error => {
      console.log(error);
      $scope.errors = error.data;
    });
  };
}

export default newCtrl;
