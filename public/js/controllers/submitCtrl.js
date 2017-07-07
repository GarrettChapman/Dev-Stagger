angular.module("myApp").controller("submitCtrl", function($scope, submitSrv){
  $scope.submit = function(form){
    submitSrv.submitForm(form).then(function(response){
      console.log(response);
    })
  }
})
