function loginCtrl($scope, $state, $auth,) {

  $auth.login($scope.user)
    .then(result => {
      $state.go('itemsIndex');
    })
    .catch(err => {
      console.log('err is', err);
    });
}


export default loginCtrl;
