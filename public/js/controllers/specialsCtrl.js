angular.module('myApp').controller('specialsCtrl', function($scope, specialsSrv){
  specialsSrv.getSpecials().then(function(response){
    console.log(response)
    $scope.myData = response.data
    // $scope.form = {}
    // $scope.bars = response.data.bar_name
    var bar_array = [];
bar_array.push(response.data)
var x = Math.floor(Math.random()*10);
$scope.random = bar_array[0][x];
console.log($scope.random);
  })


});
