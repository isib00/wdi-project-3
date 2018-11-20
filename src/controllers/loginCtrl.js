function loginCtrl($scope, $state) {
  $scope.isRegMode = false;

  // $scope.test = function() {
  //   console.log('Hello');
  // };

  $scope.switchMode = function(){
    // console.log('clicked change mode');
    $scope.isRegMode = !$scope.isRegMode;
  };

  // $scope.handleLogin = function() {
  //   // $auth.login($scope.user)
  //     .then(result => {
  //       // Flash.create('success', result.data.message);
  //       $state.go('itemsIndex');
  //     })
  //     .catch(err => {
  //       console.log('err is', err);
  //       // Flash.create('danger', 'Login failed: ' + err.data.message);
  //     });
  // };
}

export default loginCtrl;
