//controller that controls "tequila page"

myApp.controller('tequilaController', ['$scope', '$http', function($scope, $http){
  console.log('mas tequila');

  $scope.getTequila = function(){
    console.log('mas tequila');

    $http({
      method: 'GET',
      url: '/booze/Tequila',
    }).then(function(response){
      console.log(response);
      $scope.allthetequila = response.data;
    });
  };

  $scope.getTequila();

}]);
