var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

  var API_KEY = "pk.eyJ1Ijoic3RhY3lyb2Q5MyIsImEiOiJjazhmOGNvZTkwMWw4M3FvMW5wdjF3MjRpIn0.LB6eBgME78OLelxtMtCHhg";

  function createMap(earthquakes) {

    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });
  
    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      maxZoom: 18,
      id: "mapbox.dark",
      accessToken: API_KEY
    });
}