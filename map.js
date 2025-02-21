//Lab7 step 1.3
  // Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiamluMDEwIiwiYSI6ImNtN2VhYTh5OTBiazYya29ndGdlcDhhc3kifQ.2H0PSYmOAcJBPDBXwl_dPg';

   // Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map will render
    style: 'mapbox://styles/mapbox/navigation-day-v1', // Map style
    //mapbox://styles/jin010/cm7edj53c009n01r61vmhh4dr      my style
    center: [-71.09415, 42.36027], // [longitude, latitude]
    zoom: 12, // Initial zoom level
    minZoom: 5, // Minimum allowed zoom
    maxZoom: 18 // Maximum allowed zoom
});

//Lab7 step2.1
map.on('load', () =>{
    //2.1-2.2
    map.addSource('boston_route', {
        type: 'geojson',
        data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson?...'
      });

    map.addLayer({
        id: 'bike-lanes',
        type: 'line',
        source: 'boston_route',
        paint: {
          'line-color': 'purple',
          'line-width': 3,
          'line-opacity': 0.4
        }
      });   
      
    //2.3
    map.addSource('cambridge_route', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson'
    })
    //2.3
    map.addLayer({
        id: 'walk-lanes', //need new unique name
        type: 'line',
        source: 'cambridge_route', //different source
        paint: {
          'line-color': 'red',
          'line-width': 5,
          'line-opacity': 0.4
        }
      });  
});


