myApp.controller('aboutController', ['$scope', '$http', function($scope, $http){
  console.log('show me about');

  $scope.getAbout = function(){
    console.log('in get about');

    $http({
      method: 'GET',
      url: '/booze/about',
    }).then(function(response){
      console.log(response);
      $scope.alltheabout = response;
    });
  };

  $scope.getAbout();

}]);
