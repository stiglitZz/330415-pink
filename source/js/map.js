function map() {
  var myLatLng = {lat: 59.938761, lng: 30.323137};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 59.939108, lng: 30.322987},
    scrollwheel: false,
    zoom: 16
  });

  var image = {
    url: '../img/icon-map-marker.png',
    scaledSize: new google.maps.Size(36, 36)
  };

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    optimised: false,
    icon: image,
    zIndex: 2,
    title: 'Pink'
  });
}
