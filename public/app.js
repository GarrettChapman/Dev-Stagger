angular.module('myApp', ["ui.router", 'ui.grid'])

  // .controller('controller', function($scope){
  //   $scope.test = "Most Triumphant"

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "./js/views/home.html",
        controller: "mainCtrl"

      })

      .state('specials', {
        url: '/specials',
        templateUrl: './js/views/specials.html',
        controller: 'specialsCtrl'
      })

      .state('map', {
        url: '/map/' ,
        templateUrl: './js/views/map.html',
        controller: 'mapCtrl'
      })

      .state('submit', {
        url: '/submit',
        templateUrl: './js/views/submit.html',
        controller: 'submitCtrl'
      })

      .state('moreInfo', {
        url: '/moreInfo/:id' ,
        templateUrl: './js/views/map.html',
        controller: 'mapCtrl'
      })

    $urlRouterProvider
      .otherwise('/');
  })
