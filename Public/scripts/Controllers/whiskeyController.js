//controller that controls "whiskey page"

myApp.controller('whiskeyController', ['$scope', '$http', function($scope, $http){
  console.log('show me whiskey');

  $scope.getWhiskey = function(){
    console.log('in get whiskey');

    $http({
      method: 'GET',
      url: '/booze/Whiskey',
    }).then(function(response){
      console.log(response);
      $scope.allthewhiskey= response.data;
    });
  };

  $scope.getWhiskey();

}]);
