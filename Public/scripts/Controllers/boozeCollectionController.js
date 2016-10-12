myApp.controller('boozeCollectionController', ['$scope', '$http', function($scope, $http){
  console.log('booze collection');

  $scope.getCollection = function(){
    console.log('in get collection');

    $http({
      method: 'GET',
      url: '/booze',
    }).then(function(response){
      console.log(response);
      $scope.allBooze = response.data;
    });
  };

  $scope.getCollection();

}]); // end controller
