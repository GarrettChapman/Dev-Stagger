angular.module('myApp').controller('mapCtrl', function($scope, mapSrv) {
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
      center: center



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
      var markerContent = `<h1>${cur.bar_name}</h1><br>
      <p>, </p><br>
      <p>Specials: ${cur.specials}</p><br>
      <p>Review: ${cur.review}</p><br>
      <p>Rating: ${cur.rating}</p>`
      // var markerContent = '<info-window-directive name="cur.RecAreaName" description="cur.RecAreaDescription"></info-window-directive>'
      var curInfoWindow = new google.maps.InfoWindow({
        content: markerContent
      })

      var image =  'https://cdn2.iconfinder.com/data/icons/camping-outline-pt-2/100/046_-_martini_glass_wine_coctail_nightlife_party-48.png'

      // 'https://cdn2.iconfinder.com/data/icons/food-warriors/100/beer-32.png'


      var curMarker = new google.maps.Marker({
        map: map,
        icon: image,
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

  mapSrv.getYelpData().then(function(response) {
    console.log(response.data)
    map(response.data)
  })




});
