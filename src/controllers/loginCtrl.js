function loginCtrl($scope, $state, $auth, Flash) {
  $scope.handleLogin = function() {

    console.log('Logging in!');
    $auth.login($scope.user)
      .then(result => {
        // This is a flash message. It disappears after a few seconds.
        // The second argument is the message to show. It can be any string.
        Flash.create('info', result.data.message);
        $state.go('itemsIndex');
      })
      .catch(err => {
        // NOTE: If login fails, show whatever message comes from the server.
        //       Try logging in incorrectly, and check out the console log.
        console.log('err is', err);
        // The first argument is the type, we have options:
        // success, danger, warning, info
        Flash.create('warning', 'Login failed: ' + err.data.message);
      });
  };
}





export default loginCtrl;
