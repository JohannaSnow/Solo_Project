var myApp = angular.module('myApp', ['ngRoute']);

// angular routing
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/home', {
      templateUrl: '../views/partials/home.html'
    }).
    when('/about', {
      templateUrl: '../views/partials/about.html',
      controller: 'aboutController'
    }).
    when('/beer', {
      templateUrl: '../views/partials/beer.html',
      controller: 'beerController'
    }).
    when('/bourbon', {
      templateUrl: '../views/partials/bourbon.html',
      controller: 'bourbonController'
    }).
    when('/contactUs', {
      templateUrl: '../views/partials/contactUs.html',
      controller: 'contactUsController'
    }).
    when('/gin', {
      templateUrl: '../views/partials/gin.html',
      controller: 'ginController'
    }).
    when('/liqueurs', {
      templateUrl: '../views/partials/liqueurs.html',
      controller: 'liqueursController'
    }).
    when('/login', {
      templateUrl: '../views/partials/login.html',
      controller: 'loginController'
    }).
    when('/rum', {
      templateUrl: '../views/partials/rum.html',
      controller: 'rumController'
    }).
    when('/scotch', {
      templateUrl: '../views/partials/scotch.html',
      controller: 'scotchController'
    }).
    when('/tequila', {
      templateUrl: '../views/partials/tequila.html',
      controller: 'tequilaController'
    }).
    when('/vodka', {
      templateUrl: '../views/partials/vodka.html',
      controller: 'vodkaController'
    }).
    when('/whiskey', {
      templateUrl: '../views/partials/whiskey.html',
      controller: 'whiskeyController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]); // end angular routing
