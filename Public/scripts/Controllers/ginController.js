//controller that controls "gin page"

myApp.controller('ginController', ['$scope', '$http', function($scope, $http){
  console.log('show me gin N juice');

  $scope.getGin = function(){
    console.log('in get gin');

    $http({
      method: 'GET',
      url: '/booze/gin',
    }).then(function(response){
      console.log(response);
      $scope.allthegin = response;
    });
  };

  $scope.getGin();

}]);
