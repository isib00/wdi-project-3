function newCtrl($scope, $http, $state, $auth) {
  $scope.fish = {};
  $scope.handleSubmit = function() {
    console.log('$auth.getPayload is', $auth.getPayload());
    // Added a createdBy key to the data object
    // which we are going to send to the backend
    $scope.fish.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/fishes',
      data: $scope.fish
    }).then(result => $state.go('fishesShow', {
      id: result.data._id
    })).catch(error => {
      // NOTE: Check out the error object if you try and create a fish with no name
      //       or a swimDepth which is not a number
      console.log(error);
      $scope.errors = error.data;
    });
  };
}

export default newCtrl;
