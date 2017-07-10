angular.module('myApp').controller('specialsCtrl', function($scope, specialsSrv){
  specialsSrv.getSpecials().then(function(response){
    console.log(response)
    $scope.myData = response.data
  })


});
