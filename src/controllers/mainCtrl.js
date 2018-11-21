function mainCtrl($scope, $auth, $state, Flash) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };

  $scope.handleLogout = function() {
    console.log('logged out!');
    $auth.logout()
      .then(() => {
        Flash.create('danger', 'You\'ve logged out, see you later');
        $state.go('home');
      });
  };

}

export default mainCtrl;
