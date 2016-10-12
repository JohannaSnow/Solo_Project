//controller that controls "vodka page"

myApp.controller('vodkaController', ['$scope', '$http', function($scope, $http){
  console.log('show me vodka');



  $scope.getVodka = function(){
    console.log('in get vodka');

    $http({
      method: 'GET',
      url: '/booze/Vodka',
    }).then(function(response){
      console.log(response);
      $scope.allthevodka = response.data;
    });
  };

  $scope.getVodka();

}]);
