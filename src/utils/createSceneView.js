import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";

export const createSceneView = (container) => {
    const map = new Map({
        basemap: "navigation-dark-3d",
    });
    return new SceneView({
        map: map,
        container: container,
    });
}