angular.module("myApp").controller("submitCtrl", function($scope,submitSrv){
  $scope.submit = function(form){
    var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': `${$scope.form.street} ${$scope.form.city} Texas ${$scope.form.zip}`}, function(results, status) {
        form.lng = results[0].geometry.location.lng();
        form.lat = results[0].geometry.location.lat();
        console.log(submitSrv);
        submitSrv.submitForm(form).then(function(response){
          console.log(response);
        })
      });

  }
})
