myApp.controller('vodkaController', ['$scope', '$http', function($scope, $http){
  console.log('show me vodka');



  $scope.getVodka = function(){
    console.log('in get vodka');

    $http({
      method: 'GET',
      url: '/booze/vodka',
    }).then(function(response){
      console.log(response);
      $scope.allthevodka = response;
    });
  };

  $scope.getVodka();

}]);
