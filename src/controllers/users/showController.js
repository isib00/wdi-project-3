function showController($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }). then(result => {
    $scope.user = result.data;
  });
  $scope.handleDelete = function(itemId) {
    console.log('handleDelete is running');
    console.log('this is item._id', itemId);

    $http({
      method: 'DELETE',
      url: `/api/items/${itemId}`
    }).then(() => $state.reload());
  };
}

export default showController;
