angular.module('myApp').service('submitSrv', function($http){

  this.submitForm = function(form){
    console.log(form);
    return $http.post("/api/form", form)
  }
})
