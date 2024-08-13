import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
export const createMapView = (container) => {
    // here i create a map
    const map = new Map({
        basemap: "osm",
    });

    // mapView will contain the map as a reference 
    return new MapView({
        map: map,
        container: container,
        zoom: 10,
        center: [35.2433, 31.8017]
    });
}