function newCtrl($scope, $http, $state) {
  $scope.item = {};
  $scope.handleSubmit = function() {
    // console.log('$auth.getPayload is', $auth.getPayload());
    // $scope.item.createdBy = $auth.getPayload().sub;
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
