myApp.controller('whiskeyController', ['$scope', '$http', function($scope, $http){
  console.log('show me whiskey');

  $scope.getWhiskey = function(){
    console.log('in get whiskey');

    $http({
      method: 'GET',
      url: '/booze/whiskey',
    }).then(function(response){
      console.log(response);
      $scope.allthewhiskey= response;
    });
  };

  $scope.getWhiskey();

}]);
