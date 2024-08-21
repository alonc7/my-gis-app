import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useEffect, useRef } from "react";
import "./styles.css";

const ArcGisWebMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const webMap = new WebMap({
            basemap: 'topo'
        });

        const mapView = new MapView({
            map: webMap,
            container: mapRef.current,
            center: [35.2433, 31.8017],
            zoom: 10
        });

        const citiesLayer = new FeatureLayer({
            url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Cities/FeatureServer/0",
            outFields: ["*"],
            popupTemplate: {
                title: "{CITY_NAME}",
                content: "Population: {POP}"
            }
        });

        webMap.add(citiesLayer);

        return () => {
            if (mapView) {
                mapView.destroy();
            }
        };
    }, []);

    return (
        <>
            <div ref={mapRef} className="webMapViewDiv"></div>
        </>
    );
}

export default ArcGisWebMap;
