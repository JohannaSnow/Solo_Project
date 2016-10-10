//controller that controls "contact us page"

myApp.controller('contactUsController', ['$scope', '$http', function($scope, $http){
  console.log('contact us hit');

  $scope.getContactUs = function(){
    console.log('in get contact us');

    $http({
      method: 'GET',
      url: '/booze/contactUs',
    }).then(function(response){
      console.log(response);
      $scope.allthecontactus = response;
    });
  };

  $scope.getContactUs();

}]);
