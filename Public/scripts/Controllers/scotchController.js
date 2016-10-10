//controller that controls "scotch page"

myApp.controller('scotchController', ['$scope', '$http', function($scope, $http){
  console.log('show me scotch');

  $scope.getScotch = function(){
    console.log('scotchy scotch scotch');

    $http({
      method: 'GET',
      url: '/booze/scotch',
    }).then(function(response){
      console.log(response);
      $scope.allthescotch = response;
    });
  };

  $scope.getScotch();

}]);
