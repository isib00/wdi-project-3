function loginCtrl($scope, $state, $auth, Flash) {
  $scope.handleLogin = function() {
    $auth.login($scope.user)
      .then(result => {
        // This is a flash message. It disappears after a few seconds.
        // The first argument is the type:
        // success, danger, warning, info
        // The second argument is the message to show. It can be any string.
        Flash.create('success', result.data.message);
        $state.go('fishesIndex');
      })
      .catch(err => {
        // NOTE: If login fails, show whatever message comes from the server.
        //       Try logging in incorrectly, and check out the console log.
        console.log('err is', err);
        Flash.create('danger', 'Login failed: ' + err.data.message);
      });
  };
}

export default loginCtrl;
