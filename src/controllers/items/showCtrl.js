function showCtrl($state, $scope, $http) {
  $scope.comment = {};
  $http({
    method: 'GET',
    url: `/api/fishes/${$state.params.id}`
  }).then(result => {
    $scope.fish = result.data;
  });

  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/fishes/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => {
      $scope.fish = result.data;
      // Clear the comment box
      $scope.comment.text = null;
    });
  };

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/fishes/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.fish = result.data);
  };

  $scope.deleteme = function() {
    console.log($scope.comment);
  };

  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/fishes/${$scope.fish._id}`
    }).then(() => $state.go('fishesIndex'));
  };
}

export default showCtrl;
