function loginCtrl($scope, $state, $auth) {
  $scope.handleLogin = function() {
    console.log('Logging in!');
    $auth.login($scope.user)
      .then(() => $state.go('itemsIndex'))
      .catch(err => console.log('There was an error', err));
  };
}

export default loginCtrl;

// function loginCtrl($scope, $state) {
//   $scope.isRegMode = false;
//
//   // $scope.test = function() {
//   //   console.log('Hello');
//   // };
//
//   $scope.switchMode = function(){
//     // console.log('clicked change mode');
//     $scope.isRegMode = !$scope.isRegMode;

// };

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
// }












// function loginCtrl($scope, $state, $auth, Flash) {
//   $scope.handleLogin = function() {
//     $auth.login($scope.user)
//     .then(result => {
//       // This is a flash message. It disappears after a few seconds.
//       // The first argument is the type:
//       // success, danger, warning, info
//       // The second argument is the message to show. It can be any string.
//       Flash.create('success', result.data.message);
//       $state.go('itemsIndex');
//     })
//     .catch(err => {
//       // NOTE: If login fails, show whatever message comes from the server.
//       //       Try logging in incorrectly, and check out the console log.
//       console.log('err is', err);
//       Flash.create('danger', 'Login failed: ' + err.data.message);
//     });
//   };
// }
