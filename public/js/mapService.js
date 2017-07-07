angular.module("myApp").service("mapSrv", function ($http) {

  //
  this.getYelpData = function(){
    return $http.get('/bars')
  }


  // (function map() {
  //   var dallas = {lat: 32.7767, lng: -96.7970};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     center: dallas
  //   });
  //   var marker = new google.maps.Marker({
  //     position: dallas,
  //     map: map
  //
  //
  //   });
  // })()





})
