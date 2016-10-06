myApp.controller('beerController', ['$scope', '$http', function($scope, $http){
  console.log('show me beers');

  // $scope.sourcedImage = "";

  $scope.getBeer = function(){
    console.log('in get Beer');

    $http({
      method: 'GET',
      url: '/beer',
    }).then(function(response){
      console.log(response);
      // $scope. = response.data.contents.qimage.download_uri;
    });
  };

  $scope.getbeer();

}]);
