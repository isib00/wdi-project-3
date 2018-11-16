// This controller is global.
// Things put on $scope here are available everywhere!
function mainCtrl($scope, $auth, $state, $transitions) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };

  $scope.handleLogout = function() {
    // Delete the satellizer token and redirect:
    $auth.logout()
      .then(() => $state.go('home'));
  };

  // NOTE: This function runs every time the state changes. See
  // index.html for why this is useful.
  $transitions.onSuccess({}, () => {
    $scope.isHomepage = $state.$current.name === 'home';
  });
}

export default mainCtrl;
