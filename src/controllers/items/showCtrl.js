function showCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/items/${$state.params.id}`
  }).then(result => {
    $scope.item = result.data;
  });
  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/items/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => {
      $scope.item = result.data;
      console.log($scope.username, 'commented', $scope.comment.text);
      // Clear the comment box
      $scope.comment.text = null;
    });
  };

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/items/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.item = result.data);
  };

  $scope.createLikes = function() {
    console.log('liked');
    // Flash.create('info', 'you liked this item');
    $http({
      method: 'POST',
      url: `/api/items/${$state.params.id}/like`
    });
  };
  $scope.createUnlikes = function() {
    console.log('unliked');
    $http({
      method: 'POST',
      url: `/api/items/${$state.params.id}/unlike`
    });
  };
  $scope.liked = function() {
    return $scope.item.likes.includes($scope.userId);
  };
}


export default showCtrl;
