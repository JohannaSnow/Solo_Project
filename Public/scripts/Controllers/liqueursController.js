myApp.controller('liqueursController', ['$scope', '$http', function($scope, $http){
  console.log('get liqueurs');

  $scope.getLiqueurs = function(){
    console.log('in get liqueurs');

    $http({
      method: 'GET',
      url: '/booze/liqueurs',
    }).then(function(response){
      console.log(response);
      $scope.alltheliqueurs = response;
    });
  };

  $scope.getLiqueurs();
