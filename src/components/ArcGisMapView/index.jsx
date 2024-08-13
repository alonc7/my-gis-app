import { useEffect, useRef } from "react";
import "./styles.css";
import { createMapView } from "../../utils/createMapView";

const ArcGisMapView = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const mapView = createMapView(mapRef.current);
        return () => mapView && mapView.destroy();
    }, []);

    return (
        <>
            <div ref={mapRef} className="mapViewDiv"></div>
        </>
    );
}

export default ArcGisMapView;