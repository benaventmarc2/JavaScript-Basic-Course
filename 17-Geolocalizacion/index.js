let marker, map;

function initMap() {
  console.log("hola");
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });
  const marker = new google.maps.Marker({
    position: posicion,
    map: map,
    title: "Posicion Inicial",
  });
  //   marker.setPosition({lat,lng})
  //  Obtener la geolocalización
}
function geoPosicion() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation();
    const options = { timeout: 6000 };
    const watchPos = geoLoc.watchPosition(centrarMapa, onError, options);
  } else {
    alert("Tu navegador no admite geolocalización");
  }
}
function centrarMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  console.log(nuevaPos);
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos)
}
function onError(error) {
  console.error(error);
}
