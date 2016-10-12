//controller that controls "rum page"

myApp.controller('rumController', ['$scope', '$http', function($scope, $http){
  console.log('show me rum');

  $scope.getRum = function(){
    console.log('argh rum');

    $http({
      method: 'GET',
      url: '/booze/Rum',
    }).then(function(response){
      console.log(response);
      $scope.alltherum = response.data;
    });
  };

  $scope.getRum();

}]);
