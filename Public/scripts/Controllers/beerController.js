//controller that controls "beer page"

myApp.controller('beerController', ['$scope', '$http', function($scope, $http){
  console.log('show me beers');

  // $scope.sourcedImage = "";

  $scope.getBeer = function(){
    console.log('in get Beer');

    $http({
      method: 'GET',
      url: '/booze/beer',
    }).then(function(response){
      console.log(response);
      $scope.allthebeer = response;
    });
  };

  $scope.getBeer();

}]);
