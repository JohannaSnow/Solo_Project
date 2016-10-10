//controller that will control login page once it's up and running

myApp.controller('loginController', ['$scope', '$http', function($scope, $http){
  console.log('log me in scotty!');

  $scope.getLogin = function(){
    console.log('log me in please');

    $http({
      method: 'GET',
      url: '/booze/login',
    }).then(function(response){
      console.log(response);
      $scope.allthelogin = response;
    });
  };

  $scope.getLogin();

}]);
