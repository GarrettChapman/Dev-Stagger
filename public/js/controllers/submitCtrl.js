angular.module("myApp").controller("submitCtrl", function($scope,submitSrv){
  $scope.submit = function(form){
    var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': `${$scope.form.street} ${$scope.form.city} Texas ${$scope.form.zip}`}, function(results, status) {
        console.log('hello from submitCtrl')
        form.lng = results[0].geometry.bounds.b.b;
        form.lat = results[0].geometry.bounds.f.f;
        submitSrv.submitForm(form).then(function(response){
          console.log(response);
        })
      });

  }
})
