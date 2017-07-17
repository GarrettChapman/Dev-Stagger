angular.module('myApp').controller('mapCtrl', function($scope, mapSrv, $stateParams) {
  var bars;
  var weekdaySpecials = [{
    day: "Sun",
    special: "goodest drink"
  }, {
    day: "Mon",
    special: "it's ok"
  }, {
    day: "Tues",
    special: "goodest drink"
  }, {
    day: "Wed",
    special: "it's ok"
  }, {
    day: "Thurs",
    special: "goodest drink"
  }, {
    day: "Fri",
    special: "it's ok"
  }]
  var today = new Date().toString().split(" ")[0]




  var todaySpecial = weekdaySpecials.find(function(cur, ind, arr) {
    console.log(cur.day, today);
    return cur.day == today
  });
  console.log(todaySpecial);

  $scope.test = 'Most Triumphant'
  // $scope.map = function(){
  //
  // }
  function map(response) {
    let center = {

      // lat: response.region.center.latitude,
      lat: 32.777641,
      lng: -96.795974
      // lng: response.region.center.longitude
    }

    console.log(response);
    // var dallas = {lat: 32.7767, lng: -96.7970};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: center,
      styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]


    });


var homeMarker = 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/computer-48.png'


    var marker = new google.maps.Marker({
      position: center,
      map: map,
      icon: homeMarker,
      label: "D-M"
    });
    // console.log(response);
    response.forEach(function(cur) {
      var specials = ""
      var reviews = ""
      for (var special of cur.specials) {
          specials +=  '<p><small><i>' + special + '</i></small></p><br>'
      }

      for (var review of cur.reviews) {
        reviews +=  '<p><small><i>' + review + '</i></small></p><br>'
      }
      var markerContent = `<h1>${cur.bar_name}</h1><br>
      <p>SPECIALS:</p><br>
      ${specials}
      <p>REVIEWS:</p><br>
      ${reviews}
      <p>Rating: ${cur.rating}</p><br>`
      // var markerContent = '<info-window-directive name="cur.RecAreaName" description="cur.RecAreaDescription"></info-window-directive>'
      var curInfoWindow = new google.maps.InfoWindow({
        content: markerContent

      })

      var image =  'https://cdn2.iconfinder.com/data/icons/snipicons/5000/glass-32.png'

      // 'https://cdn2.iconfinder.com/data/icons/food-warriors/100/beer-32.png'


      var curMarker = new google.maps.Marker({
        map: map,
        icon: image,
        anchor: new google.maps.Point(100, 100),

        position: {

          lat: +cur.lat,
          lng: +cur.lng,

        },
        animation: google.maps.Animation.DROP
      })


      curMarker.addListener('click', function() {
        curInfoWindow.open(map, curMarker)
      })
    })
  }
if (!$stateParams.id){
  mapSrv.getYelpData().then(function(response) {
    console.log(response.data)
    bars = response.data
    map(response.data)
  })
}
else {
  mapSrv.getOneLocation($stateParams.id)
  .then(function(response) {
    console.log(response.data)
    map(response.data)
  })
}

$scope.getRandomBar = function() {
  var random = Math.floor(Math.random() * bars.length)
  var randomBar = bars.slice(random, random + 1)
  map(randomBar)
}

});
