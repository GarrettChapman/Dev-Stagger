angular.module('myApp').service('specialsSrv', function($http){
  this.getSpecials = function(){
    return $http.get("/bars")

  }
})
