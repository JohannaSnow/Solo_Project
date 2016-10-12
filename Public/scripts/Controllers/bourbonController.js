//controller that controls "bourbon page"

myApp.controller('bourbonController', ['$scope', '$http', function($scope, $http){
  console.log('show me bourbon');

  $scope.getBourbon = function(){
    console.log('in get bourbon');

    $http({
      method: 'GET',
      url: '/booze/Bourbon',
    }).then(function(response){
      console.log(response);
      $scope.allthebourbon = response.data;
    });
  };

  $scope.getBourbon();

}]);
