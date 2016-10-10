//controller that controls "bourbon page"

myApp.controller('bourbonController', ['$scope', '$http', function($scope, $http){
  console.log('show me bourbon');

  $scope.getBourbon = function(){
    console.log('in get bourbon');

    $http({
      method: 'GET',
      url: '/booze/bourbon',
    }).then(function(response){
      console.log(response);
      $scope.allthebourbon = response;
    });
  };

  $scope.getBourbon();

}]);
