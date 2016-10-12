//controller that controls "liqueur page"

myApp.controller('liqueursController', ['$scope', '$http', function($scope, $http){
  console.log('get liqueurs');

  $scope.getLiqueurs = function(){
    console.log('in get liqueurs');

    $http({
      method: 'GET',
      url: '/booze/Liqueurs',
    }).then(function(response){
      console.log(response);
      $scope.alltheliqueurs = response.data;
    });
  };

  $scope.getLiqueurs();
