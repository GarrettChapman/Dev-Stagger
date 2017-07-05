angular.module('myApp', ["ui.router"])

  // .controller('controller', function($scope){
  //   $scope.test = "Most Triumphant"

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "./views/home.html",
        controller: "mainCtrl"

      })

      .state('specials', {
        url: '/specials',
        templateUrl: './views/specials.html',
        controller: 'specialsCtrl'
      })

      .state('map', {
        url: '/map' ,
        templateUrl: './views/map.html',
        controller: 'mapCtrl'
      })

    $urlRouterProvider
      .otherwise('/');
  })
