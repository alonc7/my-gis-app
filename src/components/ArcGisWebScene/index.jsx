// ArcGisWebMap.js
import MapView from "@arcgis/core/views/MapView";   // Imports the MapView class to display the map.
import WebMap from "@arcgis/core/WebMap.js";        // Imports the WebMap class to create a map.
import { useEffect, useRef } from "react";          // Imports React hooks: useEffect for side effects, useRef for DOM refs.
import "./styles.css";                              // Imports custom styles for the component.
import { fetchCapitalCities } from "../../utils/fetchCapitalCities";

const ArcGisWebMap = () => {                        // Defines a functional component named ArcGisWebMap.
    const mapRef = useRef(null);                    // Creates a reference to attach the map to a DOM element.

    useEffect(() => {                               // useEffect runs this code after the component renders.
        const webMap = new WebMap({                 // Creates a WebMap instance to manage your map.
            basemap: 'topo'                            // Sets the basemap style to 'topo' (topographic map).
        });

        const mapView = new MapView({               // Creates a MapView instance to display the map.
            map: webMap,                            // Assigns the WebMap to the MapView.
            container: mapRef.current,              // Tells MapView where in the DOM to render (using the mapRef).
            center: [35.2433, 31.8017],             // Sets the initial center of the map (longitude, latitude).
            zoom: 10                                // Sets the initial zoom level of the map.
        });

        // Fetch the capital cities FeatureLayer and add it to the WebMap
        const citiesLayer = fetchCapitalCities();  // All JS code is in side easier to read.
        webMap.add(citiesLayer);

        return () => {                              // Cleanup function when the component unmounts.
            if (mapView) {                          // Checks if the MapView exists.
                mapView.destroy();                  // Destroys the MapView to free resources.
            }
        };
    }, []);                                         // Empty dependency array means this runs only once after the initial render.

    return (
        <>
            <div ref={mapRef} className="webMapViewDiv"></div>
        </>
    );
}

export default ArcGisWebMap;                        // Exports the ArcGisWebMap component for use in other parts of the app.
