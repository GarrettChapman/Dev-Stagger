angular.module('myApp').controller('specialsCtrl', function($scope, specialsSrv){
  specialsSrv.getSpecials().then(function(response){
    console.log(response)
    $scope.myData = response.data
    // $scope.form = {}
    // $scope.bars = response.data.bar_name
  })


});
