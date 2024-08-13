import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap.js";
import Graphic from "@arcgis/core/Graphic";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import Point from "@arcgis/core/geometry/Point";
import { useEffect, useRef } from "react";
import "./styles.css";
import { cities } from "../../utils/cities";

const ArcGisWebMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const webMap = new WebMap({
            // portalItem: {
            //     id: "e691172598f04ea8881cd2a4adaa45ba"
            // }
            basemap:'topo'
        });

        const mapView = new MapView({
            map: webMap,
            container: mapRef.current,
            center: [35.2433, 31.8017],
            zoom: 10
        });

        // Array of capital cities with their coordinates and population

        // Loop through the cities and add them as graphics to the map
        cities.forEach((city) => {
            const point = new Point({
                longitude: city.coordinates[0],
                latitude: city.coordinates[1]
            });

            const popupTemplate = new PopupTemplate({
                title: city.name,
                content: `Population: ${city.population}`
            });

            const cityGraphic = new Graphic({
                geometry: point,
                symbol: {
                    type: "simple-marker",
                    color: "red",
                    size: "8px",
                    outline: {
                        color: [255, 255, 255],
                        width: 1
                    }
                },
                popupTemplate: popupTemplate
            });

            mapView.graphics.add(cityGraphic);
        });

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
