function loginCtrl($scope, $state, $auth) {
  // $scope.isRegMode = false;
  //
  // // $scope.test = function() {
  // //   console.log('Hello');
  // // };
  //
  // $scope.switchMode = function(){
  //   // console.log('clicked change mode');
  //   $scope.isRegMode = !$scope.isRegMode;

  // };

  $scope.handleLogin = function() {

    console.log('Logging in!');
    $auth.login($scope.user)
      .then(() => $state.go('itemsIndex'))
      .catch(err => console.log('There was an error', err));
  };
}

export default loginCtrl;
