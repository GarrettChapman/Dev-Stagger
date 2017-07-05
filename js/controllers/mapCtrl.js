angular.module('myApp').controller('mapCtrl', function($scope, mapSrv) {
  $scope.test = 'Most Triumphant'
  // $scope.map = function(){
  //
  // }
  function map(response) {
    console.log(google);
    let center = {
      // lat: response.region.center.latitude,
      lat: 32.777641,
      lng: -96.795974
      // lng: response.region.center.longitude
    }
    // var dallas = {lat: 32.7767, lng: -96.7970};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: center
    });
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      label: "You Are Here"
    });
    response.businesses.forEach(function(cur) {
      var markerContent = `<h1>${cur.name}</h1><br>
      <p>${cur.location.display_address[0]}, ${cur.location.display_address[1]}</p><br>
      <p>${cur.phone}</p><br>
      <p>${cur.price}</p><br>
      <p>${cur.rating}</p>`
      // var markerContent = '<info-window-directive name="cur.RecAreaName" description="cur.RecAreaDescription"></info-window-directive>'
      var curInfoWindow = new google.maps.InfoWindow({
        content: markerContent
      })
      var curMarker = new google.maps.Marker({
        map: map,
        position: {
          lat: cur.coordinates.latitude,
          lng: cur.coordinates.longitude,
        },
        animation: google.maps.Animation.DROP
      })
      curMarker.addListener('click', function() {
        curInfoWindow.open(map, curMarker )
      })
    })
  }

  mapSrv.getYelpData().then(function(response) {
    console.log(response.data)
    map(response.data)
  })




});
