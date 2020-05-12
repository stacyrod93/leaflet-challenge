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

var url ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

function markerSize(magnitude) {
    return magnitude * 5;
}

// function to return the color based on magnitude
function markerColor(magnitude) {
  if (magnitude > 4) {
    return 'red'
  } else if (magnitude > 3) {
    return 'orange'
  } else if (magnitude > 2) {
    return 'yellow'
  } else {
    return 'green'
  }
}